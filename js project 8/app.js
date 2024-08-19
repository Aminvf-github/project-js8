
list=async()=>{
    let header = document.getElementById("header")
    let content = document.getElementById("content")
    try{
        let req = await fetch("https://fakestoreapi.com/products")
        let products = await req.json()
        products.forEach(product => {
            let card = document.createElement("div")
            card.classList.add("card")
            
            card.innerHTML=`
            <div class="main">
            <div class="main-btn">
            <button class="btn2" onclick="checkId()">Add to Basket</button>
            </div>
            <h3>${product.title}</h3>
            <p>description:${product.description}</p>
            <div class="master">
            <p>price:${product.price}</p>
            <p>category:${product.category}</p>           
            <p>Rating: ${product.rating.rate}</p>
            <p> Count:${product.rating.count} </p>
            </div>
            <img src="${product.image}" alt="${product.title}" class="images">
           </div>
            `
            content.appendChild(card)
        });
    }catch(err){
        console.log(err);
    }
}
