let body = document.getElementById("cart");
    let itemData = JSON.parse(localStorage.getItem('add-cart')) || [];
    let total = document.getElementById("total");

    function displayItems(data){
        body.innerHTML = null;
        let sum = 0;
        data.forEach((el) => {
            sum += el.price;
        })
        let ans = sum.toFixed(2);
        total.innerText = ans;
        data.forEach((el,index) => {
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
        btn.innerText = "Delete"
        btn.addEventListener('click',function () {
            deleteData(index);
        })

        card.append(img,price,title,rating,btn);
        body.append(card);

        })
    }
    displayItems(itemData);

    function deleteData(index){
        itemData = itemData.filter(function (el,i) {
            return i!== index;
        })
        displayItems(itemData);
        localStorage.setItem('add-cart',JSON.stringify(itemData));
    }