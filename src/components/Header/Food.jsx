import React from 'react';

const Food = (props) => {
    return (
        <>
            <h6>{props.s.strMeal ? props.s.strMeal : '--'}: {props.s.quantity}</h6>
        </>
    );
};

export default Food