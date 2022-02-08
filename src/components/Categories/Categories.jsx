import React from "react";
import Styles from "./styles.module.css";
import StylesApp from "../../App.module.css";
import Category from "./Category";
//import axios from "axios";
import { useState, useEffect } from "react";
//import Spinner from "../spinner/Spinner";

export default function Categories({ handleCategory }) {
  //const baseURL = "http://worldguestbooking.com.ar:8080/categories/all";
  //const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [errorMessage, setErrorMessage] = useState("");

  const categories=[
    {
      id:1,
      title:"Bed & Breakfast",
      url:"https://cf.bstatic.com/xdata/images/xphoto/max1440/48390568.jpg?k=88efac2c5cd16fa89dbb99b17fa13da8cf7ef8117e110f3489bcde300cfd2239&o=",
      description:"1500 hoteles",
    },
    {
      id:2,
      title:"Hoteles",
      url:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      description:"100 hoteles",
    },
    {
      id:3,
      title:"Hostels",
      url:"https://hostelelbolson.com/wp-content/uploads/2021/06/Habitaciones-14-4-1024x683.jpg",
      description:"500 hostels",
    },
    {
      id:4,
      title:"Departamentos",
      url:"https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896",
      description:"300 departamentos",
    }
  ]
  const [data] = useState(categories);

  /*useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);*/

  return (
    /*(errorMessage && loading) ?
      <div className={`${Styles.categoryContainer} ${StylesApp.delimiter}`}>
        <div className={`${Styles.categoryBlock} ${StylesApp.delimiterChild}`}>
          <h2 className={Styles.categoryBlock}>
            Categorías no disponibles - Falta la conexión con el Back
          </h2>
        </div>
      </div>
      :*/
      <div className={`${Styles.categoryContainer} ${StylesApp.delimiter}`}>
        <div className={`${Styles.categoryBlock} ${StylesApp.delimiterChild}`}>
          <h2>Buscar por tipo de alojamiento</h2>
          {/*{loading ? (
            <Spinner />
            <p>Loading Data...</p> 
          ) : (*/}
            <div className={Styles.categoryBox}>
              {data.map((c) => (
                <Category
                  key={c.id}
                  title={c.title}
                  imageUrl={c.url}
                  description={c.description}
                  category={c.title}
                  handleCategory={handleCategory}
                />
              ))}
            </div>
        </div>
      </div>
  );
}