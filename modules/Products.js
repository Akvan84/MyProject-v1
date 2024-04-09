const Products = async ()=>{
let data = await fetch("https://fakestoreapi.com/products")
let result = await data.json()
let product = result.map(elem=>{
    return `
        <div class="product">
          <h2>Title: ${elem.title.substring(0,20)}...</h2>
          <img src="${elem.image}" alt="image">
          <p>Description: ${elem.description.substring(0,150)}...</p>
          <h3>Price: ${elem.price} $</h3>
          <h3>Rate: ${elem.rating.rate}</h3>
        </div>`
})
document.querySelector(".products").innerHTML = product.join("")
}

export default Products