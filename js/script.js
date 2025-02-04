//login check
if (!localStorage.getItem('isLoggedIn')) {
    window.location = "login.html";
}


//shop now button
const shopButton = document.querySelector(".shopButton");
const shopSection = document.querySelector(".shop-section");

shopButton.addEventListener('click', function () {
    shopSection.scrollIntoView({ behavior: 'smooth' });
});

//display items
let collection = document.getElementById("collection");

let displayItem = () => {
    return (collection.innerHTML = data.map((x) => {
        let { id, name, discription, price, image } = x;
        return `
        <div id=product-${id} class="col" id="newItem">
                <div class="card">
                    <img src=${image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${discription}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h6>${price} EGP</h6>
                        </li>
                        <li class="list-group-item">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </li>
                        <li class="list-group-item">
                            <button onclick="addToCart(${id})" class="addBtn">Add to Cart </button>
                        </li>
                    </ul>
                </div>
            </div>
    `
    }).join(""));
};
displayItem();

//add to cart
let cart = [];
let addToCart = (id) => {
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
    showMessage();
    localStorage.setItem("data", JSON.stringify(cart));
    console.log(cart);
};

//display message
let message=document.getElementById("message-box")
let showMessage = () => {
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000)
};
