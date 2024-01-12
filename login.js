var s_email = document.getElementById("s-email")
var s_password = document.getElementById("s-password")
var sign = document.getElementById("sign")
var  w_user=document.getElementById("w_user")
var incorrect=document.getElementById("incorrect")
 var users = JSON.parse(localStorage.getItem("ALL"));
 var userName=JSON.parse(localStorage.getItem("N-user"))
 function  sined() {
    if (s_email.value =="" && s_password.value =="") {

        sign.classList.replace("d-none","d-block")
        incorrect.classList.replace("d-block", "d-none")   
    } else {
        for (var i = 0; i < users.length; i++) {
            userName=users[i].text
            localStorage.setItem("N-user",JSON.stringify(userName))
            if(users[i].mail.toLowerCase()==s_email.value.toLowerCase()&&users[i].poss.toLowerCase()==s_password.value.toLowerCase()){
                location.href="welcome.html"
                return true

            }


        }
        incorrect.classList.replace("d-none", "d-block")    
        sign.classList.replace("d-block","d-none")

    }






}
// if(users[i].mail==s_email.value&&users[i].poss==s_password.value)
// alert("hello yo malm")
function dispaly(){
    w_user.innerHTML=`welcome ${userName}`
}
function log(){
    
    localStorage.removeItem("N-user")
    localStorage.removeItem(Item)


     
}