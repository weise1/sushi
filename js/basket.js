'use strict';


window.addEventListener('click', (event) => {
    const cardWrapper = document.querySelector('.cart-wrapper'); // Обертка корзины
    const target = event.target;

    //Помещение товара в корзину

    if(target.hasAttribute('data-cart')) {


        
        const cart = target.closest('.card');

        const cardContent = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.product-img').getAttribute('src'),
            title: cart.querySelector('.item-title').textContent,
            itemsInBox: cart.querySelector('[data-items-in-box]').textContent,
            priceWeight: cart.querySelector('.price__weight').textContent,
            priceCur: cart.querySelector('.price__currency').textContent,
            counter: cart.querySelector('[data-counter]').textContent
        }

        // console.log(cardContent);


        //Проверка есть ли уже товар в корзине
        const cardId = cardWrapper.querySelector(`[data-id="${cardContent.id}"]`);

        //Если товар ест в корзине
        if (cardId) {
            const counterElem = cardId.querySelector('[data-counter]');
            counterElem.textContent = parseInt(counterElem.textContent) + parseInt(cardContent.counter); 
            
        } else {
            const cardItemHtml = `
            <!-- Cart item -->
            <div class="cart-item" data-id="${cardContent.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${cardContent.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${cardContent.title}</div>
                        <div class="cart-item__weight">${cardContent.itemsInBox} / ${cardContent.priceWeight}.</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${cardContent.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${cardContent.priceCur}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>
            <!-- // Cart item -->

        </div>
        `;  
            cardWrapper.insertAdjacentHTML('afterbegin', cardItemHtml);
            calcCartPrice();

        }

        //Сброс счетчика на 1
        cart.querySelector('[data-counter]').textContent = '1';

        //Отображение статуса корзины Пустая /  Полная
        
        basketClear();
        
    }


})