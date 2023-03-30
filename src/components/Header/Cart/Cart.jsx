import React from 'react';
import Food from '../Food';
import './Cart.css'

const Cart = (props) => {
    let quantity = 0
    let totalPrice = 0
    let tax = 0
    let grandTotal = 0
    for (const singleProduct of props.save) {
        quantity += singleProduct.quantity
        totalPrice += singleProduct.quantity * singleProduct.price
    }
    tax = (totalPrice * 7) / 100
    grandTotal = tax + totalPrice


    return (
        <>
            <div className='my-4 bg-light shadow-lg p-3 rounded-3'>
                <h3 className='text-center mb-4'>Selected Products: {quantity}</h3>
                <div className='d-flex justify-content-between'>
                    <h6>Name.</h6>
                    <h6>Qn.</h6>
                    <h6>price</h6>
                    <h6>+-</h6>
                </div>
                <ol>{props.save.map(s => <Food click={props.click} s={s}></Food> )}</ol>
                <h5>Total price: ${totalPrice}</h5>
                <h5>Tex: ${tax}</h5>
                <h4 className='text-center gtotal'>Grand Total: ${grandTotal}</h4>
            </div>
        </>
    );
};

export default Cart;