// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-container">
      <p className="crypto-name">
        <img className="crypto-image" src={currencyLogo} alt={currencyName} />{' '}
        {currencyName}
      </p>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
