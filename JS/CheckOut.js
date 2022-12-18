let form = document.querySelector("form");

form.addEventListener('submit',function (event){
    event.preventDefault();
    let name = form.name;
    let pass = form.pass;
    let otp = form.otp;

    if(name.value=="Dishant Baraily" && pass.value=="234567" && otp.value=="678"){
        alert("🎉 You have successfully placed your order");
        localStorage.removeItem('add-cart');
        window.location.assign('./Products.html')
    } else{
        alert("Wrong Details")
        form.reset();
    }
})