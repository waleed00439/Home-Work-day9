import { useState, useEffect } from "react"



// https://api.coincap.io/v2/assets?limit=20

function App() {
  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(20)
  
  

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
      const data = await res.json()
      console.log(data.data)
      setCoins(data.data)
    } 
    
    

    

    fetchCoins()
  }, [limit])

  const handleRefresh = () => {
    setLimit(10)
    window.scrollTo(0, 0)
  }

  return (
    <section className="coins">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
      Cryptocurrency <select></select>
      </h1>
      <article>
        <p>Showing {coins.length} coins</p>
      </article>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Logo</th>
            <th>symbol</th>
           
           
            <th>Name</th>
            <th>Price (USD)</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(({ id,symbol,Logo, name, rank, priceUsd }) => (
            <tr key={id}>
              <td>{rank}</td>
             <td> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z" /></g></svg></td>
              <td>{symbol}</td>
              <td>{name}</td>
              <td>${parseFloat(priceUsd).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
     
      <div className="buttons">
        <button onClick={() => setLimit(limit + 20)}>Next</button>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </section>
  )
}

export default App