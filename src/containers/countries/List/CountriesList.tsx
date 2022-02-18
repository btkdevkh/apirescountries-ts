import { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCountries } from '../../../api/countriesServiceApi'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import { ICountry } from '../../../models/Country'
import CountryShow from '../Show/CountryShow'

type MyProps = {}

interface MyState {
  countriesList: ICountry[]
  loading: boolean
  isSelectedRegion: string|boolean
  currentPage: number
}

export default class CountriesList extends Component<MyProps, MyState> {
  state: MyState = {
    countriesList: [],
    loading: false,
    isSelectedRegion: "",
    currentPage: 1
  }

  handleChangeCountry(region: string) {
    this.setState({ loading: true })

    getCountries(region.toLowerCase())
      .then(data => {        
        const countries: ICountry[] = data.map((country: any, idx: number) => {
          return {
            id: idx,
            name: country.name.common,
            translations: country.translations.fra.official,
            capital: country.capital,
            region: country.region,
            flag: country.flags.png
          }
        })        

        this.setState({ 
          countriesList: countries,
          loading: false,
          isSelectedRegion: region,
          currentPage: 1
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false }) 
      }) 
  }

  componentDidMount() {
    this.handleChangeCountry("All")
  }

  render() {
    const { countriesList, loading, isSelectedRegion, currentPage } = this.state

    let countriesListCalPage: any[] = []
    let pagination = []

    if(countriesList) {
      let nbCountryPerPage = countriesList.length / 10
      if(countriesList.length % 10 !== 0) nbCountryPerPage++

      for(let i = 1; i <= nbCountryPerPage; i++) {
        pagination.push(
          <Button 
            key={i}
            onClick={() => this.setState({currentPage: i})}
            className='btn btn-info'
            currentPage={currentPage === i}
          >
            {i}
          </Button>
        )
      }

      const start = (currentPage - 1) * 10
      const end = currentPage * 10
      const countriesPerPage = countriesList.slice(start, end)
      countriesListCalPage = countriesPerPage.map((country: ICountry) => (
        <div className='col-12 col-md-6 border' key={country.id}>
          <Link 
            className="text-decoration-none"
            to={'/countries/' + country.name}
          >
            <CountryShow country={country} />
          </Link>
        </div>
      ))
    }

    return (
      <div className='mt-3 text-center'>
        <Title className='p-2'>Tous les pays du monde</Title>
        <div className='d-flex justify-content-center mb-3'>
          <Button 
            region={isSelectedRegion === "All"}
            onClick={this.handleChangeCountry.bind(this, "All")}
            className='btn btn-info'
          >
            Tous
          </Button>
          <Button 
            region={isSelectedRegion === "Europe"}
            onClick={this.handleChangeCountry.bind(this, "Europe")}
            className='btn btn-info'
          >
            Europe
          </Button>
          <Button 
            region={isSelectedRegion === "Africa"}
            onClick={this.handleChangeCountry.bind(this, "Africa")}
            className='btn btn-info'
          >
            Afrique
          </Button>
          <Button 
            region={isSelectedRegion === "Asia"}
            onClick={this.handleChangeCountry.bind(this, "Asia")}
            className='btn btn-info'
          >
            Asie
          </Button>
          <Button 
            region={isSelectedRegion === "Americas"}
            onClick={this.handleChangeCountry.bind(this, "Americas")}
            className='btn btn-info'
          >
            Amérique
          </Button>
          <Button 
            region={isSelectedRegion === "Oceania"}
            onClick={this.handleChangeCountry.bind(this, "Oceania")}
            className='btn btn-info'
          >
            Océanie
          </Button>
        </div>

        { loading ? <div>Chargement...</div> :
          <div className='row text-center'>
            { countriesListCalPage }
          </div>
        }

        {/* Pagination */}
        { pagination }
      </div>
    )
  }
}
