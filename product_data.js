const products = [
  {
    id: "pro1",
    name: "AllenSolly",
    price: 80,
    image: "img/img1.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro2",
    name: "AllenSolly",
    price: 80,
    image: "img/img2.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id:"pro3",
    name: "AllenSolly",
    price: 80,
    image: "img/img3.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro4",
    name: "AllenSolly",
    price: 80,
    image: "img/img4.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro5",
    name: "AllenSolly",
    price: 80,
    image: "img/img5.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro6",
    name: "AllenSolly",
    price: 80,
    image: "img/img6.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro7",
    name: "AllenSolly",
    price: 80,
    image: "img/img7.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro8",
    name: "AllenSolly",
    price: 80,
    image: "img/img8.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro9",
    name: "AllenSolly",
    price: 80,
    image: "img/img9.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro10",
    name: "AllenSolly",
    price: 80,
    image: "img/img10.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro11",
    name: "AllenSolly",
    price: 80,
    image: "img/img11.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro12",
    name: "AllenSolly",
    price: 80,
    image: "img/img13.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro13",
    name: "AllenSolly",
    price: 80,
    image: "img/img24.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro14",
    name: "AllenSolly",
    price: 80,
    image: "img/img20.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro15",
    name: "AllenSolly",
    price: 80,
    image: "img/img22.webp",
    description: "Goa Holiday Tshirt",
  },
  {
    id: "pro16",
    name: "AllenSolly",
    price: 80,
    image: "img/img23.webp",
    description: "Goa Holiday Tshirt",
  },
  
];




const productsEl = document.querySelector(".pro-container");





//render products here
function renderProducts(){
    products.forEach((product)=>{
        productsEl.innerHTML += 
        `<div   class="pro">
          <img src="${product.image}" alt="product-image" />
          <div class="des">
            <span>${product.name}</span>
            <h5>${product.description}</h5>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4>${product.price}</h4>
          </div>
          <a  href="cart.html"id="myCart" class="cart" onclick="addtoCart(${product.id})"><i class="fa-solid fa-cart-plus"></i></a>
        </div>`
    })

}
renderProducts();
let cart=[];
function addtoCart(id){
   const item= products.find((product)=>product.id===id)
   cart.push(item);
   console.log(cart);

}
