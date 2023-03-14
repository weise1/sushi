function basketClear () {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cardEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    const delivery = document.querySelector('.h5');

    if (cartWrapper.children.length > 0) {
        cardEmpty.classList.add('none')
        orderForm.classList.remove('none')
        delivery.classList.remove('none');
    } else {
        cardEmpty.classList.remove('none')
        orderForm.classList.add('none')
        delivery.classList.add('none');

    }

    
};