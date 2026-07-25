/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    // =========================
    // STAPLES
    // =========================

    {
        id: 1,
        name: "Basmati Rice",
        category: "staples",
        price: 120,
        unit: "per kg",
        emoji: "🍚"
    },

    {
        id: 2,
        name: "Wheat Flour",
        category: "staples",
        price: 55,
        unit: "per kg",
        emoji: "🌾"
    },

    {
        id: 3,
        name: "Cooking Oil",
        category: "staples",
        price: 150,
        unit: "1 litre",
        emoji: "🫗"
    },

    {
        id: 4,
        name: "Sugar",
        category: "staples",
        price: 45,
        unit: "per kg",
        emoji: "🧂"
    },

    {
        id: 5,
        name: "Salt",
        category: "staples",
        price: 25,
        unit: "1 kg",
        emoji: "🧂"
    },

    {
        id: 6,
        name: "Toor Dal",
        category: "staples",
        price: 140,
        unit: "per kg",
        emoji: "🫘"
    },


    // =========================
    // SNACKS
    // =========================

    {
        id: 7,
        name: "Potato Chips",
        category: "snacks",
        price: 20,
        unit: "pack",
        emoji: "🥔"
    },

    {
        id: 8,
        name: "Aloo Bhujia",
        category: "snacks",
        price: 60,
        unit: "pack",
        emoji: "🥨"
    },

    {
        id: 9,
        name: "Mixture Namkeen",
        category: "snacks",
        price: 70,
        unit: "pack",
        emoji: "🥨"
    },

    {
        id: 10,
        name: "Cream Biscuits",
        category: "snacks",
        price: 30,
        unit: "pack",
        emoji: "🍪"
    },

    {
        id: 11,
        name: "Salted Biscuits",
        category: "snacks",
        price: 25,
        unit: "pack",
        emoji: "🍪"
    },

    {
        id: 12,
        name: "Cookies",
        category: "snacks",
        price: 50,
        unit: "pack",
        emoji: "🍪"
    },

    {
        id: 13,
        name: "Popcorn",
        category: "snacks",
        price: 40,
        unit: "pack",
        emoji: "🍿"
    },

    {
        id: 14,
        name: "Instant Noodles",
        category: "snacks",
        price: 15,
        unit: "pack",
        emoji: "🍜"
    },

    {
        id: 15,
        name: "Namkeen Peanuts",
        category: "snacks",
        price: 50,
        unit: "pack",
        emoji: "🥜"
    },

    {
        id: 16,
        name: "Milk Chocolate",
        category: "snacks",
        price: 50,
        unit: "pack",
        emoji: "🍫"
    },

    {
        id: 17,
        name: "Dark Chocolate",
        category: "snacks",
        price: 80,
        unit: "pack",
        emoji: "🍫"
    },

    {
        id: 18,
        name: "Chocolate Bar",
        category: "snacks",
        price: 30,
        unit: "piece",
        emoji: "🍫"
    },

    {
        id: 19,
        name: "Toffee Pack",
        category: "snacks",
        price: 40,
        unit: "pack",
        emoji: "🍬"
    },


    // =========================
    // BEVERAGES
    // =========================

    {
        id: 20,
        name: "Tea",
        category: "beverages",
        price: 120,
        unit: "250 g",
        emoji: "🍵"
    },

    {
        id: 21,
        name: "Coffee",
        category: "beverages",
        price: 150,
        unit: "100 g",
        emoji: "☕"
    },

    {
        id: 22,
        name: "Fruit Juice",
        category: "beverages",
        price: 90,
        unit: "1 litre",
        emoji: "🧃"
    },

    {
        id: 23,
        name: "Cold Drink",
        category: "beverages",
        price: 40,
        unit: "750 ml",
        emoji: "🥤"
    },

    {
        id: 24,
        name: "Mineral Water",
        category: "beverages",
        price: 20,
        unit: "1 litre",
        emoji: "💧"
    },


    // =========================
    // DAIRY
    // =========================

    {
        id: 25,
        name: "Milk",
        category: "dairy",
        price: 60,
        unit: "1 litre",
        emoji: "🥛"
    },

    {
        id: 26,
        name: "Curd",
        category: "dairy",
        price: 50,
        unit: "500 g",
        emoji: "🥣"
    },

    {
        id: 27,
        name: "Paneer",
        category: "dairy",
        price: 100,
        unit: "200 g",
        emoji: "🧀"
    },

    {
        id: 28,
        name: "Butter",
        category: "dairy",
        price: 60,
        unit: "100 g",
        emoji: "🧈"
    },


    // =========================
    // STATIONERY
    // =========================

    {
        id: 29,
        name: "Ball Pen",
        category: "stationery",
        price: 10,
        unit: "piece",
        emoji: "🖊️"
    },

    {
        id: 30,
        name: "Gel Pen",
        category: "stationery",
        price: 15,
        unit: "piece",
        emoji: "🖊️"
    },

    {
        id: 31,
        name: "Pencil",
        category: "stationery",
        price: 5,
        unit: "piece",
        emoji: "✏️"
    },

    {
        id: 32,
        name: "Eraser",
        category: "stationery",
        price: 5,
        unit: "piece",
        emoji: "◻️"
    },

    {
        id: 33,
        name: "Sharpener",
        category: "stationery",
        price: 10,
        unit: "piece",
        emoji: "✏️"
    },

    {
        id: 34,
        name: "Notebook",
        category: "stationery",
        price: 50,
        unit: "1 notebook",
        emoji: "📓"
    },

    {
        id: 35,
        name: "Long Notebook",
        category: "stationery",
        price: 80,
        unit: "1 notebook",
        emoji: "📒"
    },

    {
        id: 36,
        name: "Drawing Book",
        category: "stationery",
        price: 70,
        unit: "1 book",
        emoji: "📔"
    },

    {
        id: 37,
        name: "Sketch Pens",
        category: "stationery",
        price: 60,
        unit: "set",
        emoji: "🖍️"
    },

    {
        id: 38,
        name: "Color Pencils",
        category: "stationery",
        price: 80,
        unit: "set",
        emoji: "🌈"
    },

    {
        id: 39,
        name: "Scale",
        category: "stationery",
        price: 10,
        unit: "piece",
        emoji: "📏"
    },

    {
        id: 40,
        name: "Glue Stick",
        category: "stationery",
        price: 25,
        unit: "piece",
        emoji: "🧴"
    },

    {
        id: 41,
        name: "A4 Notebook",
        category: "stationery",
        price: 100,
        unit: "1 notebook",
        emoji: "📘"
    },

    {
        id: 42,
        name: "Exam Pad",
        category: "stationery",
        price: 80,
        unit: "piece",
        emoji: "📋"
    },


    // =========================
    // PERSONAL CARE
    // =========================

    {
        id: 43,
        name: "Bath Soap",
        category: "personal-care",
        price: 35,
        unit: "piece",
        emoji: "🧼"
    },

    {
        id: 44,
        name: "Shampoo",
        category: "personal-care",
        price: 90,
        unit: "bottle",
        emoji: "🧴"
    },

    {
        id: 45,
        name: "Toothpaste",
        category: "personal-care",
        price: 80,
        unit: "pack",
        emoji: "🪥"
    },

    {
        id: 46,
        name: "Toothbrush",
        category: "personal-care",
        price: 40,
        unit: "piece",
        emoji: "🪥"
    },

    {
        id: 47,
        name: "Hair Oil",
        category: "personal-care",
        price: 100,
        unit: "bottle",
        emoji: "🧴"
    },


    // =========================
    // HOUSEHOLD
    // =========================

    {
        id: 48,
        name: "Washing Powder",
        category: "household",
        price: 120,
        unit: "1 kg",
        emoji: "🧺"
    },

    {
        id: 49,
        name: "Dishwashing Bar",
        category: "household",
        price: 25,
        unit: "piece",
        emoji: "🧽"
    },

    {
        id: 50,
        name: "Floor Cleaner",
        category: "household",
        price: 120,
        unit: "1 litre",
        emoji: "🧹"
    },

    {
        id: 51,
        name: "Garbage Bags",
        category: "household",
        price: 60,
        unit: "pack",
        emoji: "🗑️"
    },

    {
        id: 52,
        name: "Tissue Paper",
        category: "household",
        price: 50,
        unit: "pack",
        emoji: "🧻"
    }

];


/* =========================================
   GET HTML ELEMENTS
========================================= */

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const noProducts =
    document.getElementById("noProducts");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const emptyCart =
    document.getElementById("emptyCart");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const openCartBtn =
    document.getElementById("openCartBtn");

const closeCartBtn =
    document.getElementById("closeCartBtn");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const orderForm =
    document.getElementById("orderForm");

const orderTotal =
    document.getElementById("orderTotal");

const orderSuccess =
    document.getElementById("orderSuccess");

const continueShopping =
    document.getElementById("continueShopping");

const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================
   CART
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("groceryCart")
    ) || [];


/* =========================================
   CURRENT CATEGORY
========================================= */

let currentCategory = "all";


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;


            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.style.display =
            "block";

        return;

    }


    noProducts.style.display =
        "none";


    filteredProducts.forEach(product => {

        const productCard =
            document.createElement("div");


        productCard.className =
            "product-card";


        productCard.innerHTML = `

            <div class="product-image">

                ${product.emoji}

            </div>


            <div class="product-info">

                <span class="product-category">

                    ${product.category}

                </span>


                <h3>

                    ${product.name}

                </h3>


                <span class="product-price">

                    ₹${product.price}

                </span>


                <span class="product-unit">

                    ${product.unit}

                </span>


                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >

                    Add to Cart

                </button>


            </div>

        `;


        productGrid.appendChild(
            productCard
        );

    });

}


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(productId) {

    const existingItem =
        cart.find(
            item =>
                item.id === productId
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            id: productId,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* =========================================
   REMOVE PRODUCT FROM CART
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();

    updateCart();

}


/* =========================================
   CHANGE PRODUCT QUANTITY
========================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) {

        return;

    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCart();

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartItems.innerHTML = "";


    let total = 0;

    let totalItems = 0;


    if (cart.length === 0) {

        emptyCart.style.display =
            "block";

    } else {

        emptyCart.style.display =
            "none";

    }


    cart.forEach(cartItem => {

        const product =
            products.find(
                item =>
                    item.id === cartItem.id
            );


        if (!product) {

            return;

        }


        const itemTotal =
            product.price *
            cartItem.quantity;


        total += itemTotal;

        totalItems +=
            cartItem.quantity;


        const cartItemElement =
            document.createElement("div");


        cartItemElement.className =
            "cart-item";


        cartItemElement.innerHTML = `

            <div class="cart-item-image">

                ${product.emoji}

            </div>


            <div class="cart-item-info">

                <h4>

                    ${product.name}

                </h4>


                <div class="cart-item-price">

                    ₹${product.price}

                </div>


                <div class="quantity-controls">


                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            -1
                        )"
                    >

                        −

                    </button>


                    <span>

                        ${cartItem.quantity}

                    </span>


                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            1
                        )"
                    >

                        +

                    </button>


                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(
                        ${product.id}
                    )"
                >

                    Remove

                </button>


            </div>

        `;


        cartItems.appendChild(
            cartItemElement
        );

    });


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        `₹${total}`;


    orderTotal.textContent =
        `₹${total}`;

}


/* =========================================
   SAVE CART TO LOCAL STORAGE
========================================= */

function saveCart() {

    localStorage.setItem(
        "groceryCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            categoryButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            displayProducts();

        }
    );

});


/* =========================================
   PRODUCT SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    displayProducts
);


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartSidebar.classList.add(
        "active"
    );


    cartOverlay.classList.add(
        "active"
    );

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    cartSidebar.classList.remove(
        "active"
    );


    cartOverlay.classList.remove(
        "active"
    );

}


openCartBtn.addEventListener(
    "click",
    openCart
);


closeCartBtn.addEventListener(
    "click",
    closeCart
);


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================
   CHECKOUT
========================================= */

checkoutBtn.addEventListener(
    "click",
    () => {


        if (cart.length === 0) {

            alert(
                "Your cart is empty. Please add some products first."
            );

            return;

        }


        checkoutModal.classList.add(
            "active"
        );

    }
);


/* =========================================
   CLOSE CHECKOUT MODAL
========================================= */

closeModalBtn.addEventListener(
    "click",
    () => {

        checkoutModal.classList.remove(
            "active"
        );

    }
);


/* =========================================
   PLACE ORDER
========================================= */

orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        orderForm.style.display =
            "none";


        orderSuccess.style.display =
            "block";


        cart = [];


        saveCart();

        updateCart();

    }
);


/* =========================================
   CONTINUE SHOPPING
========================================= */

continueShopping.addEventListener(
    "click",
    () => {


        checkoutModal.classList.remove(
            "active"
        );


        orderForm.style.display =
            "block";


        orderSuccess.style.display =
            "none";


        // Scroll back to products

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   CONTACT FORM
========================================= */

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        contactMessage.textContent =
            "Your enquiry has been recorded. The shop can contact you using the phone number provided.";


        contactForm.reset();

    }
);


/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


/* =========================================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "active"
            );

        }
    );

});


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

checkoutModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            checkoutModal
        ) {

            checkoutModal.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   INITIALIZE WEBSITE
========================================= */

displayProducts();

updateCart();