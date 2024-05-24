const header = document.querySelector("header")
const product1rightp = document.querySelector(".product1rightp")

function runLater(){
    setTimeout(() =>{
        header.classList.add("time")
    },300)
}
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if (window.scrollY > 196) {
        header.classList.add("see")
        runLater()
    } else {
        header.classList.remove("see")
        header.classList.remove("time")
    }
})


let productArr=[
    {
        name:"Smartphone 11 Pro",
        price:255.00,
        dec:"4G LTE, 5.8”, 64 GB, A13 Robotic",
        images:"assets/images/vega-product-1-450x500.jpg"
    },
    {
        name:"Smartphone A30",
        price:199.00,
        dec:"4000mAh, Flat, 5.8”, Ultra Wide",
        images:"assets/images/vega-product-2-1.jpg"
    },
    {
        name:"Metal Case Notebook",
        price:189.00,
        dec:"Inter Color i7, 13.9 in, 16 GB, 512 GB",
        images:"assets/images/vega-product-3.jpg"
    },
    {
        name:"Smartphone 11 Pro Case",
        price:229.00,
        dec:"Wireless charging, TPU, 15 g",
        images:"assets/images/vega-product-13-1.jpg"
    },
    {
        name:"Wireless & Loud H7i",
        price:199.00,
        dec:"1110 mAh, Jakob Wagner, Aluminium",
        images:"assets/images/vega-product-4.jpg"
    },
    {
        name:"Smart Band Carbon",
        price:255,
        dec:"Android, iOS, Steps, Up to 4 months",
        images:"assets/images/vega-product-5.jpg"
    },
    {
        name:"Photo Omega D3R II",
        price:159.00,
        dec:"Brand E-mount, 35mm, 500 shots",
        images:"assets/images/vega-product-6.jpg"
    },
    {
        name:"Photo 55mm f/1.8",
        price:205.00,
        dec:"67, 494 g, E 16-55mm, 0.33 m",
        images:"assets/images/vega-product-14.jpg.webp"
    },
   
]


product1rightp.innerHTML= productArr.map((item)=> {
    return` <div class="singleproduct">
    <img src="${item.images}" alt="">
    <h4>${item.name}</h4>
    <p>${item.dec}</p>
    <div class="colorstar">
        <div class="colors">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
        </div>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <div class="priceshopping">
        <div class="price">
            <h3><span>£</span> ${item.price}</h3>
        </div>
        <div class="shopping">
            <i class="fa-light fa-cart-shopping"></i>
        </div>
    </div>
</div>`
}).join("")


const product3all = document.querySelector(".product3all")

let productArr2 =[
    {
        name:"Wireless & Loud H7i",
        price:259.00,
        dec:"1110 mAh, Jakob Wagner, Aluminium",
        images:"assets/images/vega-product-4.jpg"
    },
    {
        name:"Smartphone A30",
        price:199.00,
        dec:"4000mAh, Flat, 5.8”, Ultra Wide",
        images:"assets/images/vega-product-2-1.jpg"
    },
    {
        name:"Smart TV BOX",
        price:129.00,
        dec:"Quad-core, 8GB, 5.0 ",
        images:"assets/images/vega-product-12.jpg.webp"
    },
    {
        name:"Tablet Pro Smart 11 ",
        price:299.00,
        dec:"11, A12X RobotiC",
        images:"assets/images/vega-product-11.jpg"
    },
    {
        name:"Photo 55mm f/1.8",
        price:205.00,
        dec:"67, 494 g, E 16-55mm, 0.33 m",
        images:"assets/images/vega-product-14.jpg.webp"
    },

]


product3all.innerHTML = productArr2.map((item) => {
    return`<div class="singleproduct">
    <img src="${item.images}" alt="">
    <h4>${item.name}</h4>
    <p>${item.dec}</p>
    <div class="colorstar">
        <div class="colors">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
        </div>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <div class="priceshopping">
        <div class="price">
            <h3><span>£</span> ${item.price}</h3>
        </div>
        <div class="shopping">
            <i class="fa-light fa-cart-shopping"></i>
        </div>
    </div>
</div>`
}).join("")