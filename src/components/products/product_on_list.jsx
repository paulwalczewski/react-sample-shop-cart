import React from 'react';

const ProductOnList = ({data, onAddToCart}) => {  
    return (
        <li className='product-on-list'>
            <strong>{data.name}</strong>
            <button onClick={onAddToCart} type='button'>Add to cart</button>
        </li>
    )
}

ProductOnList.propTypes = {
    data: React.PropTypes.object.isRequired,
    onAddToCart: React.PropTypes.func.isRequired
}

export default ProductOnList;