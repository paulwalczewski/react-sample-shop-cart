import React from 'react';

const ProductsList = (props) => {  
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export default ProductsList;