import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = (props) => {
    const { id, name, price, img, ratings, stock } = props.a
    return (
        <div className='col-6 col-lg-4'>
            <div className="card shadow h-100 card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='text-danger'>Price: {price}</h6>
                    <p>ratings: {ratings}</p>
                    <p>stock: {stock}</p>
                    <div className='d-flex justify-content-between'>
                        <button onClick={() =>{ props.click(id, true); props.notify()}} className="btn btn-sm btn-primary">
                            <FontAwesomeIcon icon={faCartPlus} beatFade /> add cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;