var btnMenu = document.querySelector(".header__menu--btn")

function ShowMenu() {
    document.querySelector("#fill").style = 'display: block;'
    document.querySelector(".header__navbar-list--menu").style = 'display: block;';
    document.querySelector(".header__navbar-list").style = 'display: block;'
    document.querySelector(".header__navbar-list").classList.add('header__navbar-list--mobile')

}

btnMenu.addEventListener('click', ShowMenu)

var btnClose = document.querySelector("#close");
var fill = document.querySelector("#fill");


function Close(closeItems) {
    document.querySelector(".header__navbar-list").classList.remove('header__navbar-list--mobile');
    
    var index = 0;
    for (let index = 0; index < closeItems.length; index++) {
        document.querySelector(closeItems[index]).style = 'display: none;';
    }

}

function intermediaryClose() {
    var CloseItems = [
        "#fill",
        ".header__navbar-list",
        ".header__navbar-list--menu"
    ]
    Close(CloseItems)
}



btnClose.addEventListener('click', intermediaryClose)
fill.addEventListener('click', intermediaryClose)


// SHOP JS





const cardProducts = {
    dataProduct : "http://localhost:3000/cardProduct",
    _this: this,

    renderCardProduct: (card) => {
        const productContain = document.querySelector(".product-section");
        let cardProductHTML = '' 
        for(let x in card){
            let currentCard = card[x];
            let cardProduct = `
                <div class="grid__column-3">
                <nav class="product-cart">
                    <div class="product-cart__top">
                        <img src="${currentCard.image}" alt="this is Tunic dress" class="product-cart__top--avatar">
                        <nav class="product-cart__top--stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </nav>
                        <h3 class="product-cart__top--add">
                            <i class="fa-solid fa-cart-shopping"></i>
                            ADD TO CART
                        </h3>
                    </div>
                    <div class="product-cart__under">
                        <h1 class="product-cart__under--tittle">${currentCard.name}</h1>
                        <p class="product-cart__under--typeCloth">${currentCard.type}</p>
                        <span class="product-cart__under--price">${currentCard.price}</span>
                    </div>
                </nav>
            </div>
            `;
            cardProductHTML += cardProduct;

        }
        productContain.innerHTML = cardProductHTML;
    },

    handleCardProduct: {
        getCardProduct: () => {
            fetch(cardProducts.dataProduct)
                .then(response => response.json())
                .then(data => cardProducts.renderCardProduct(data))
                .catch((err)=> console.log("ERROR: " , err))
        },
    },

    start: ()=> {
        cardProducts.handleCardProduct.getCardProduct()
    }
}
cardProducts.start();
