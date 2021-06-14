import axios from "axios";


var resultados
function getResultados(){
 axios.get('https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/%7B1430ab26-ea5b-4f51-80df-ce6d26333393%7D', resultados).then(resp => {
  resultados = resp.data
  resultados=resultados.Data
  console.log(resultados);
});
return resultados
}


console.log(getResultados());



export default getResultados()
