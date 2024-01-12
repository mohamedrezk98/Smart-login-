
var Name=document.getElementById("name")
var email=document.getElementById("email")
var password=document.getElementById("password")
var par=document.getElementById("par")
var suss=document.getElementById("suss")

// var s_email=document.getElementById("s-email")
// var s_password=document.getElementById("s-password")
var m_sign=document.getElementById("m_sign")

var inputs=[]
if(localStorage.getItem("ALL")!=null){
  inputs=JSON.parse(localStorage.getItem("ALL"))

}
function getInputs(){
  if(validateName() && validatemail()&&validatePass()){
    if(exist()==false){
    user={
      text : Name.value,
      mail :email.value,
      poss: password.value,
    };
  inputs.push(user)
   clear()
   suss.classList.replace("d-none","d-block")
   par.classList.replace("d-block","d-none")
   Name.classList.remove("is-valid")
    email.classList.remove("is-valid")
   localStorage.setItem("ALL",JSON.stringify(inputs));
  }
}else{
  suss.classList.replace("d-block","d-none")

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "you must  enter your values !",


  });
}
}




// function dispaly(){
//  if( validateName() && validatemail()&&validatePass()) {
//   par.innerHTML="good"
//    par.classList.replace("d-none","d-block")
//  }else
//  {

//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "you must  enter your values !",


//   });

//  }
// }
function clear(){
  email.value="";
  password.value=""
  Name.value="";
  suss.classList.replace("d-block","d-none")

}

var text= /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ0-9]+)*$/;
var masssege=document.getElementById("massege");


Name.addEventListener("keyup",validateName)
function validateName() {
  if(text.test(Name.value)){
    
      Name.classList.add("is-valid")
      Name.classList.remove("is-invalid")
      masssege.classList.replace("d-block","d-none")
      return true ;


  }else{
    Name.classList.add("is-invalid")
    Name.classList.remove("is-valid")
    masssege.classList.replace("d-none","d-block")
    return false;
  }

  
}


var regexMail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var massegeMail=document.getElementById("mail")
email.addEventListener("keyup",validatemail)
function validatemail() {
  if(regexMail.test(email.value)){
      email.classList.add("is-valid")
      email.classList.remove("is-invalid")
      massegeMail.classList.replace("d-block","d-none")
      return true ;

  }else{
    email.classList.add("is-invalid")
    email.classList.remove("is-valid")
    massegeMail.classList.replace("d-none","d-block")
    return false;
  }

  
}

var regexPass=/^[a-zA-Z]{4,}$/;
var massegePass=document.getElementById("pass")
password.addEventListener("keyup",validatePass)
function validatePass() {
  if(regexPass.test(password.value)){
    
      massegePass.classList.replace("d-block","d-none")
      return true ;
  }else{
    massegePass.classList.replace("d-none","d-block")
    return false;
  }

  
}



function exist(){
for (i=0;i<inputs.length;i++){
  if(inputs[i].mail.toLowerCase()==email.value.toLowerCase()||inputs[i].text.toLowerCase()==Name.value.toLowerCase()){
    par.innerHTML ="already exsit ";
    par.classList.replace("d-none","d-block")
    suss.classList.replace("d-block","d-none")//{0}{1}

    return true
  }
}
 return false
}






























