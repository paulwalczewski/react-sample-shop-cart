const CartCalculator = {
    calculateTotalProductPrice: ({price, quantity, inPromotion}) => {
        let calculatedPrice;
        let discount = inPromotion
            ? CartCalculator.calculateDiscount(price, quantity)
            : 0;

        calculatedPrice = (price * quantity - discount).toFixed(2);
        return calculatedPrice;
    },
    calculateTotalAmount: (products) => {
        let totalAmount = 0;

        products.map((product) => {
            return totalAmount = (Math.round(totalAmount * 100, 2) / 100) + (Math.round(product.totalPrice * 100, 2) / 100);
        })

        return totalAmount.toFixed(2);
    },
    calculateDiscount: (price, quantity) => { //could be more dynamic, but due to lack of time it only handles '3 for 2' promo
        let discount = 0;

        if (quantity < 2) {
            return 0;
        }

        let quantityOfDiscounted = Math.floor(quantity / 3);

        discount = quantityOfDiscounted * price;
        return discount;
    }
}

export default CartCalculator;