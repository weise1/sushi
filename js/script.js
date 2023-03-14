'use strict';

window.addEventListener('click', (event) => {

    //Counter

    const target = event.target;
    let counter;

        if(target.dataset.action === 'plus' || target.dataset.action === 'minus') {
            const counterWrapper = target.closest('.counter-wrapper');
            counter = counterWrapper.querySelector('[data-counter]');
            // deliveryCost = counterWrapper.querySelector('.delivery-cost');
        }


        if(target.dataset.action === 'plus' && parseInt(counter.textContent) <= 9) {
            counter.textContent++;
            
        }
        if(target.dataset.action === 'minus' ) {


            if(parseInt( counter.textContent) > 1) {
                counter.textContent--;
            } else if (target.closest('.cart-wrapper') && parseInt(counter.textContent) === 1) {  //Пределяем скоуп корзины по клику
                target.closest('.cart-item').remove();

               

                
                
                basketClear();
                calcCartPrice();
                

                
            }


            

        }

    if( target.hasAttribute('data-action') && target.closest('.cart-wrapper')) {
        calcCartPrice();
    }

        



    





});