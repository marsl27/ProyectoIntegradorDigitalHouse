/*COMPONENTE CARDS*/
import axios from "axios";

const baseUrl = "http://localhost:8080/"


function AxiosGetProductosRecomendados( setData, setLoading, setTitulo, setErrorMessage ){
    const baseUrlProductosRecomendados = `${baseUrl}products/get/recommended`;

    axios.get("mock/products.json")
    .then(response => {
        setData(response.data);
        setLoading(false);
        setTitulo("Recomendaciones");

    })
    .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
    })
}

function AxiosGetProductosPorCategoria( setData, setLoading, setTitulo, setErrorMessage,category ){
    //const baseUrlPorCategoria = `${baseUrl}products/get/category/${category}`;

    axios.get("mock/products.json")
    .then(response => {
        setData(response.data.filter((product)=>product.category===category));
        setLoading(false);
        setTitulo(`Resultados para ${category}`);
    })
    .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
    });
}

function AxiosGetProductosPorCiudad(setData, setLoading, setTitulo, setErrorMessage, city){
    //const baseUrlPorCiudad = `${baseUrl}products/get/city/${city}`;

    axios.get("mock/products.json")
        .then(response => {
            setData(response.data.filter((product)=>product.city===city));
            setLoading(false);
            setTitulo(`Resultados para ${city}`);
        })
        .catch(error => {
            setErrorMessage(error.message);
            setLoading(false);
        });
}

function AxiosGetProductosFavoritos(setData, setLoading, setTitulo, setErrorMessage){
/*NO FUNCIONA PORQUE FALTA LA LOGICA DEL JWT */

    const baseUrlFavourite = `${baseUrl}users/getFavorites`;

    axios.post(baseUrlFavourite,{email: sessionStorage.getItem("email")})
        .then(response => {
            setData(response.data);
            setLoading(false);
            setTitulo(`Favoritos`);
        })
        .catch(error => {
            setErrorMessage(error.message);
            setLoading(false);
        });
}

export {AxiosGetProductosRecomendados, AxiosGetProductosPorCategoria, AxiosGetProductosPorCiudad, AxiosGetProductosFavoritos}