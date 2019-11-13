// show the card by

(function ()
{
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function ()
    {
        // The toggle() method toggles between hide() and show() for the selected elements.
        cart.classList.toggle("show-cart");
    });
})();

// add items to the cart

(function ()
{
    // cartBtn - cart bitton
    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function (btn)
    {
        // targeting the exact button
        btn.addEventListener('click', function (event)
        {
            //we are targetiing specificly on Icon cart, not the whole element
            if (event.target.classList.contains("store-item-icon")) {






                // let name = event.target.parentElement.parentElement.nextElementSibling.
                //     children[0].children[0].textContent;


                let name = document.getElementById("elementName").textContent;

                console.log(name);

                let price = event.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[1].textContent;
                // take off $ and space in price
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item", "d-flex", "justify-content-between",
                    "text-capitalize", "my-3");

                cartItem.innerHTML = `
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="cart-item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
            </a>
            </div>
                `;
                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                alert(
                    event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent +
                    " added in the cart");
                //showTotals
                showTotal();

            }
        });
    });

    //showTotals
    function showTotal()
    {
        // creating an array of all prices, then loop the prices
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");

        items.forEach(function (item)
        {
            total.push(parseFloat(item.textContent));
        });

        const totalMoney = total.reduce(function (total, item)
        {
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        //insert values
        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector("item-total").textContent = finalMoney;
        document.getElementById("cart-count").textContent = total.length;

    }
})();