let body = document.getElementById("products");
    let filter = document.getElementById("filter");
    filteredData = [];
    pricedSort = [];
    resetData = [];
    searchData = [];

    fetch('https://fakestoreapi.com/products')
    .then((res) => {
      return res.json();
    })
    .then((Data) => {
      filteredData = Data;
      resetData = Data;
      pricedSort = Data;
      searchData = Data;
      displayPro(Data)
    })
    .catch((err) => {
      console.log(err);
    })

    function displayPro(data){
      body.innerHTML = null;
      data.forEach((el) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute('src',el.image);

        let title = document.createElement("h3");
        title.innerText = el.title;

        let price = document.createElement("h2");
        price.innerText = el.price;

        let cat = document.createElement("h2");
        cat.innerText = el.category;

        let rating = document.createElement("p");
        rating.innerText = el.rating.rate;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.addEventListener("click",() => {
          var cartData = JSON.parse(localStorage.getItem("add-cart")) || [];
            var isPresent = false;
            for(var i=0; i<cartData.length; i++){
              if(cartData[i].id === el.id){
                isPresent = true;
                break;
              }
            }
            if(isPresent===true){
              alert("Already added to cart");
            } else{
              cartData.push({...el});
              localStorage.setItem('add-cart',JSON.stringify(cartData));
            }
        })

        card.append(img,price,title,rating,btn);
        body.append(card);
      })
    }

    filter.addEventListener('change',() => {
      let filterCheck = filteredData.filter((el) => {
        if(filter.value==el.category){
          return true;
        } else{
          return false
        }
      })
      displayPro(filterCheck);
    })

    

    function search(){
        let searchItem = document.querySelector("input").value;
        let newData = searchData.filter(function (el){
            return el.title.toLowerCase().includes(searchItem.toLowerCase());
        })
        displayPro(newData);
    }
    
    function handleSort(){
        let priceSort = document.getElementById("price").value;
        if(priceSort=="High"){
             pricedSort.sort((a,b) => b.price-a.price)
        } 
        if(priceSort=="Low"){
             pricedSort.sort((a,b) => a.price-b.price)
        }
        if(priceSort=="Popular"){
            pricedSort.sort((a,b) => b.rating.rate-a.rating.rate)
        }
        displayPro(pricedSort);
    }

    function reset(){
        displayPro(resetData);
    }