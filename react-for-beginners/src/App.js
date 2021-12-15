import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [moneyChk, setMoneyChk] = useState(false);
  const [money, setMoney] = useState(0);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setMoneyChk(true);
  };

  const handleChangeSelect = (event) => {
    const coinInfo = event.target.value.split(" ");

    setSelectedCoin([
      coinInfo[0] + " " + coinInfo[1],
      coinInfo[3].substring(1, coinInfo[3].length),
    ]);
  };
  return (
    <div>
      <h1> {loading ? "The Coins !" : `The Coins : ${coins.length}`}</h1>
      {moneyChk ? (
        <h2>i have {money} $</h2>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="number"
            value={money}
            onChange={onChange}
            placeholder="How much money do you have?"
          ></input>
          <button>입력</button>
        </form>
      )}

      {loading ? (
        <strong>loading</strong>
      ) : (
        <select onChange={handleChangeSelect} defaultValue="Choose the coin">
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      {isNaN(selectedCoin) ? (
        <h2>You can buy {Math.floor(money / selectedCoin[1])} </h2>
      ) : null}
    </div>
  );
}

export default App;
//npm start
