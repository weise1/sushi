const productContainer = document.querySelector('#products-container');

// console.log(productContainer);

const getData = async (url) => {
    const result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Could not fetch ${url}, status ${result.status}`); 
    }

    return await result.json();
}

getData('http://localhost:3000/menu') 
.then(data => {
    data.forEach(({id, title, itemsInBox, weight, price, imgSrc}) => {
        productContainer.innerHTML += `
        <div class="col-md-6">
        <div class="card mb-4" data-id="${id}">
            <img class="product-img" src="${imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${title}</h4>
                <p><small data-items-in-box class="text-muted">${itemsInBox} шт.</small></p>

                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__weight">${weight}г.</div>
                        <div class="price__currency">${price} UAH</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

            </div>
        </div>
    </div>
        `;
    });
});

