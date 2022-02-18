import { ICountry } from "../../../models/Country";

type Props = {
  country: ICountry
}

export default function CountryShow(props: Props) {  
  const { name, capital, region, flag } = props.country
  
  return (
    <div className="row">
      <div className="col-4">
        <img className="img-fluid" src={flag} alt={name} />
      </div>
      <div className="col">
        <h2>Nom : {name}</h2>
        <div>Capitale : {capital}</div>
        <div>Region : {region}</div>
      </div>
    </div>
  )
}
