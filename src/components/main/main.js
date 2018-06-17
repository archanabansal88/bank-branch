import React, {Component} from 'react'
import cities from '../../data/cities'
import Dropdown from '../dropdown'
import Search from '../search'
import List from '../list'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      data: false,
      selectedCity: cities[0],
      filteredData: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
  }

  handleCityChange (event) {
    const selectedCity = event.target.value
    this.getData(selectedCity)
  }

  getData (city) {
    window.fetch(`https://app.fyle.in/api/bank_branches?city=${city}&offset=0&limit=50`)
      .then((response) => response.json())
      .then((data) => this.setState({data, filteredData: data, selectedCity: city, searchTerm: ''}))
  }

  componentDidMount () {
    const {selectedCity} = this.state
    this.getData(selectedCity)
  }

  handleInputChange (event) {
    const searchTerm = event.target.value
    const {data} = this.state
    const filteredData = data.filter((data) => {
      const objValues = Object.values(data).join('').toLowerCase()
      return objValues.indexOf(searchTerm.toLowerCase()) !== -1
    })
    this.setState({filteredData, searchTerm})
  }

  render () {
    const {searchTerm, filteredData, selectedCity} = this.state
    return (
      <div>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                Bank Branches
              </h1>
            </div>
          </div>
        </section>
        <div className='container'>
          <div className='level'>
            <div className='level-left'><Dropdown data={cities} onChange={this.handleCityChange} selected={selectedCity} /></div>
            <div className='level-right'><Search onChange={this.handleInputChange} value={searchTerm} /></div>
          </div>
          {filteredData && <List data={filteredData} />}
        </div>
      </div>
    )
  }
}

export default Main
