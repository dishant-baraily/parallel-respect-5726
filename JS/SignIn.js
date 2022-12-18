    let signInBtn = document.getElementById('signinbtn');
    let signUpBtn = document.getElementById('signupbtn');
    let signIn = document.querySelector('#signIn');
    let signUp = document.querySelector('#signUp');
    

    signUp.style.display = 'none';

    signInBtn.addEventListener('click',function(){
       signUp.style.display = 'none';
       signIn.style.display = 'block';
    })
    signUpBtn.addEventListener('click',function(){
        signIn.style.display = 'none';
        signUp.style.display = 'block';
    })

    signUp.addEventListener('submit',function(event){
        event.preventDefault();
        let name = signUp.name;
        let email = signUp.email;
        let pass = signUp.password;

        let details = JSON.parse(localStorage.getItem("account-data")) || [];
        if(name.value=="" || email.value == "" || pass.value == ""){
            alert("Please enter all the fields below");
        } else{
            let userDetails = {
                name: name.value,
                email: email.value,
                pass: pass.value
            }
            details.push(userDetails);
            localStorage.setItem("account-data",JSON.stringify(details));
            alert("Sign up successful");
            signUp.reset();
        }
    })

    signIn.addEventListener('submit',function(event){
        event.preventDefault();
        let email = signIn.email1;
        let password = signIn.password1;
        
        let userData = JSON.parse(localStorage.getItem('account-data'));
        var count = 0;
        if(email=="" || password==""){
            alert("Please enter all the fields below");
        } else{
            for(var i=0; i<userData.length; i++){
                if(userData[i].email == email.value && userData[i].pass == password.value){
                    count++;
                    break
                }
            }
            if(count>0){
                alert('Welcome');
                window.location.assign('./Products.html')
            } else{
                alert('Wrong Credentials');
            }
        }
        
    })