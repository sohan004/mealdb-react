import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    const { id, name, price, quantity } = props.s
    return (
        <li>
            <div className='mb-3 gap-3 d-flex justify-content-between'>
                <p>{name.slice(0, 10)}</p>
                <p>{quantity}</p>
                <p>{price * quantity}</p>
                <div>
                    <button onClick={() => props.click(id, true)} className="btn btn-sm btn-primary">
                        <FontAwesomeIcon icon={faPlus} beat /></button>
                    <button onClick={() => props.click(id, false)} className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrashCan} shake /></button>
                </div>
            </div>
        </li>
    );
};

export default Food