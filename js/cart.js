if (!localStorage.getItem('isLoggedIn')) {
    window.location = "login.html";
}
//display cart
let cart = JSON.parse(localStorage.getItem("data")) || [];
let head = document.getElementById('head');
let cartSection = document.getElementById('cart');
let totalPrice = document.getElementById('total');

let displayItems = () => {
    if (cart.length === 0) {
        head.innerHTML = `
            Your cart is Empty !   
            <a href="index.html" class="btn btn-dark">Back To Home</a>
        `
        cartSection.innerHTML = ``;
        totalPrice.innerHTML = ``;
    }
    else {
        head.innerHTML = `
            Your Cart & Items
        `
        totalPrice.innerHTML = `
            <h3 id='sum'>Total Price: ${calcTotal()} EGP</h3>
            <button onClick="clearCart()" class="btn btn-danger">Clear Cart</button>
            <button class="btn btn-dark">Check out</button>
        `
        return (
            cartSection.innerHTML = cart.map((x) => {
                let itemInfo = data.find((y) => y.id === x.id) || [];
                return `
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${itemInfo.image} class="img-fluid rounded-start" width="200px" height="100px" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${itemInfo.name}</h5>
                        <p class="card-text">${itemInfo.discription}</p>
                        <h5>Item Price: ${itemInfo.price} EGP</h5>
                        <div class="quantity">
                            <div class="counter">
                                <button onclick="decrement(${itemInfo.id})" id="decrease" class="btn btn-dark px-2">-</button>
                                <span id=${itemInfo.id}>${x.item}</span>
                                <button onclick="increment(${itemInfo.id})" id="increase" class="btn btn-dark px-2">+</button>
                            </div>
                        </div>
                        <li class="list-group-item">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </li>
                        <button onClick="removeThis(${x.id})" class="btn btn-danger p-1 mt-4">Remove</button>
                    </div>
                </div>
            </div>
        </div>
            `
            }).join(""));
    }

}

//increment and decrement item

let increment = (id) => {
    let selectedItem = id;
    //to not repeat item in cart

    let searchItem = cart.find((x) => x.id === selectedItem);
    if (searchItem === undefined) {
        cart.push({
            id: selectedItem,
            item: 1, //first to insert
        });
    }
    else {
        searchItem.item += 1;
    }

    localStorage.setItem("data", JSON.stringify(cart));
    update(id);
};
let decrement = (id) => {
    let selectedItem = id;
    //to not repeat item in cart

    let searchItem = cart.find((x) => x.id === selectedItem);
    if (searchItem === undefined) return;
    if (searchItem === 0) {
        return;
    }
    else {
        searchItem.item -= 1;
    }
    cart = cart.filter((x) => x.item != 0);//remove what has item=0
    localStorage.setItem("data", JSON.stringify(cart));
    displayItems();
    update(id);
};
let calcTotal = () => {
    let sum = 0;
    cart.forEach((x) => {
        let itemInfo = data.find((y) => x.id === y.id) || [];
        sum += itemInfo.price * x.item;
    });
    return sum;
};

let update = (id) => {
    //get item updated
    let searchItem = cart.find((x) => x.id === id);
    document.getElementById(id).innerHTML = searchItem ? searchItem.item : 0;
    let total = calcTotal();
    console.log(total);
    document.getElementById('sum').innerHTML = `Total Price: ${total} EGP`;

}
let clearCart = () => {
    localStorage.removeItem("data");
    cart=[];
    displayItems();
}
let removeThis = (id) => {
    cart = cart.filter((x) => x.id != id);
    localStorage.setItem("data", JSON.stringify(cart));
    displayItems();

}
cart = JSON.parse(localStorage.getItem("data")) || [];
displayItems();


