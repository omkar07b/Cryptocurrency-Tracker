// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {isLoading, cryptoData} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              className="cryptocurrency-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="cryptos-container">
              <li className="table-header-container">
                <h1 className="coin-type-cell">Coin Type</h1>
                <h1 className="usd-cell">USD</h1>
                <h1 className="euro-cell">EURO</h1>
              </li>
              {cryptoData.map(each => (
                <CryptocurrencyItem key={each.id} cryptoDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
