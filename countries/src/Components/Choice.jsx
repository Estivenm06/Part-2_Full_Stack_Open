import OneCountry from "./OneCountry"
import Results from "./Results.jsx"

const Choice = ({country, result}) => {
    let filtered = []
      if(country.length > 0){
        filtered = result.filter(e => 
          e.name.common.toLowerCase().includes(country.toLowerCase()))
      }
      else{
        filtered = result
      }

      if(filtered.length > 10){
        return("Too many matches, specify another filter")
      }else if(filtered.length === 1){
        return (filtered.map(e => <OneCountry key={e.name.common} result={e}/>))
      }
      else{
        return (filtered.map(e => <Results key={e.name.common} result={e}/>))
      }
  }

export default Choice;