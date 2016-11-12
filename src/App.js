import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import productsData from './data_mock/products_list.json';

import ProductsList from './components/products/products_list';
import ProductOnList from './components/products/product_on_list';

import Cart from './components/cart/cart';
import CartCalculator from './helpers/cart_calculator';

class App extends Component {
    constructor() {
        super();

        this.state = {
            cart: {
                productsInCart: [],
                totalAmount: '0.00'
            },
            productsList: productsData
        };

        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart(product) {
        let cart = Object.assign({}, this.state.cart);
        let index = cart.productsInCart.indexOf(product);

        if (!cart.productsInCart.includes(product)) {
            product.quantity = 1;
            cart.productsInCart.push(product);
            index = cart.productsInCart.indexOf(product);
        } else {
            cart.productsInCart[index].quantity++;
        }

        cart.productsInCart[index].totalPrice = CartCalculator.calculateTotalProductPrice(product);
        cart.totalAmount = CartCalculator.calculateTotalAmount(cart.productsInCart);

        this.setState({cart: cart})
    }

    render() {
        return (
            <div className='shop-wrap'>
                <div className='app-header'>
                    <img src={logo} className='app-logo' alt='logo'/>
                </div>
                <ProductsList className='products-list'>
                    {this.state.productsList.map((product, i) => {
                            let onAddToCart = this.onAddToCart.bind(this, product);
                            return <ProductOnList onAddToCart={onAddToCart} data={product} key={product.id}/>
                        })
                    }
                </ProductsList>
                <Cart 
                    products={this.state.cart.productsInCart}
                    totalAmount={this.state.cart.totalAmount}/>
            </div>
        );
    }
}

export default App;
