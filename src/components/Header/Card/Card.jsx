import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { strMealThumb, strMeal, strCategory, strArea, idMeal } = props.a
    return (
        <div className='col-6 col-lg-4'>
            <div className="card shadow h-100" >
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p>id: {idMeal}</p>
                    <p>Cetagory: {strCategory}</p>
                    <p>{strArea} food</p>
                    <div className='d-flex justify-content-between'>
                        <button onClick={() => props.click(idMeal, true)} className="btn btn-sm btn-primary">
                        <FontAwesomeIcon icon={faCartPlus} beatFade /> add cart</button>
                        <button onClick={() => props.click(idMeal, false)} className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrashCan} shake />  delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;