import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCountry } from "../../../api/countriesServiceApi";
import { Country, ICountry } from "../../../models/Country";
import CountryShow from "../Show/CountryShow";

export default function CountryDetails() {
  const { id } = useParams()  
  const [country, setCountry] = useState<ICountry[] | null>(null)

  useEffect(() => {
    if(id) {
      getCountry(id)
        .then(res => {
          const formateCountry = res.map((data: any) => Country.hydrateData(data))
          setCountry(formateCountry)
        })
        .catch(err => console.log(err))
    }
  }, [id])


  return (
    <div>
      { 
        country && 
        country.map(country => (
          <CountryShow key={country.name} country={country} />
        ))
      }
    </div>
  )
}
