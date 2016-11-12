import React from 'react';
import CartProduct from './cart_product';

const Cart = ({products, totalAmount}) => {  
    return (
        <div className='cart-wrap'>
            <ul className='products-list'>
            {
                products.map((product, i) => {
                    return <CartProduct className='cart-product' key={product.id} data={product} />
                })
            }
            </ul>
            <p>
                Total amount: {totalAmount} USD
            </p>
        </div>
    )
}

Cart.propTypes = {
    products: React.PropTypes.array.isRequired,
    totalAmount: React.PropTypes.string.isRequired
}

export default Cart;