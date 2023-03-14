function deliveryCheck(priceTotal) {
    const delivery = document.querySelector('.delivery-cost');

    // console.log(carTotalPrice.textContent);


    if (priceTotal > 0) {
        delivery.classList.remove('none');
    } else {
        delivery.classList.add('none');

    }

    if(priceTotal >= 600) {
        delivery.classList.add('free');
        delivery.textContent = 'бесплатно';
        // console.log(parseInt(carTotalPrice.textContent));
    } else {
        delivery.classList.remove('free');
        delivery.textContent = '100 грн';

    }
}