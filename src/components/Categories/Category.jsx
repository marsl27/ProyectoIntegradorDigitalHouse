import React from 'react';
import Styles from './styles.module.css';


export default function Category({ id, imageUrl, title, description, category, handleCategory}) {

    return (
        <div className={Styles.categoryCard} onClick={() => {
            handleCategory(category)
          }}  >
            <img className={Styles.categoryImage} src={imageUrl} alt={`imagen ${id}`} />
            <div className={Styles.categoryType}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div >

    )
}

