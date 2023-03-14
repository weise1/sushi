function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item'),
    totalCartPrice = document.querySelector('.total-price');
    let cartPriceCurrency, cartCounter, totalSum = 0;
          

    // console.log(cartPriceCurrency, cartCounter);


    cartItems.forEach(item => {
        cartPriceCurrency = item.querySelector('.price__currency'),
        cartCounter = item.querySelector('[data-counter]'),
        


        totalSum += parseInt(cartCounter.textContent) * parseInt(cartPriceCurrency.textContent);

        
        // cartPriceCurrency.innerHTML = `<div class="price__currency">${totalSum} ₽</div>`;



        // console.log(cartPriceCurrency.textContent, cartCounter.textContent, totalSum);
        
    })

    totalCartPrice.textContent = totalSum;

    deliveryCheck(totalSum);
    

}

