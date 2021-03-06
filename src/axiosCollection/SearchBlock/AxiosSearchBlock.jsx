import axios from "axios";

//const baseURL = "http://localhost:8080/cities/all";

function AxiosGetAllCities(setData, setErrorMessage){
    axios
    .get("mock/cities.json")
    .then((response) => {
      setData(response.data);        
    })
    .catch((error) => {
      setErrorMessage(error);
    });
}

export {AxiosGetAllCities}