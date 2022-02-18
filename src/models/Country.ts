export interface ICountry {
  id?: number
  name: string
  translations: string
  capital: string
  region: string
  flag: string
}

export class Country implements ICountry {
  id: number = 0
  name: string = ''
  translations: string = ''
  capital: string = ''
  region: string = ''
  flag: string = ''

  static hydrateData(data: any): ICountry | null {
    let output = new Country()

    if(output.name.length < 0) {
      return null
    }

    output.id = data.id ?? -1
    output.name = data.name ?? ''
    output.translations = data.translations.fr ?? ''
    output.capital = data.capital ?? ''
    output.region = data.region ?? ''
    output.flag = data.flag ?? ''

    return output
  }
}
