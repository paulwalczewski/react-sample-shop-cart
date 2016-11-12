import React from 'react';

const CartProduct = ({data }) => {  
    return (
        <div className='cart-product'>
            <span>{data.quantity}</span>
            <span className='separator'>x</span>
            <span className='product-name'>{data.name}</span>
            <span className='price'>{data.baseCurrency} {data.totalPrice}</span>
        </div>
    )
}

CartProduct.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default CartProduct;