const formWrapper = document.querySelector('form');
      
// alert(1);
formWrapper.addEventListener('submit', (e) => {

    const cardWrapper = document.querySelector('.cart-wrapper'),
          cartItem = cardWrapper.querySelectorAll('.cart-item'); 

    e.preventDefault();

    cartItem.forEach(item => {
        const cardObj = {
            id: item.dataset.id,
            imgSrc: item.querySelector('img').getAttribute('src'),
            title: item.querySelector('.cart-item__title').textContent,
            priceCur: item.querySelector('.price__currency').textContent,
            counter: item.querySelector('[data-counter]').textContent
        }

        const json = JSON.stringify(cardObj);

        const postData = async (url, data) => {
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data
            })
    
            return await result.json();
        }

        postData('http://localhost:3000/produtsInBasket', json)
        .then(data => console.log(data));
    });

    


    
});