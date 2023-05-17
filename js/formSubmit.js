

const password=$("#password");
const username=$("#username");
const regex= /^[a-zA-Z\-]+$/;

let errorUsername;
let errorPassword;


console.log($("#envoyer"))
$("#envoyer").click((e)=>{
   e.preventDefault();
   if(!username.val()){
    errorUsername="Le nom d'utilisateur est requise";
    $("#errorUsername").text(errorUsername)
   }else if(!regex.test(username.val())){
    errorUsername="Le nom d'utilisateur est invalid";
    $("#errorUsername").text(errorUsername)
   }else if(!password.val()){
    errorPassword="Le mot de password est requise";
    $("#errorPassword").text(errorPassword)
   }else if(password.val().length < 8){
    errorPassword="Le mot de password est trop court";
    $("#errorPassword").text(errorPassword)
   }else{
    $("#errorUsername").text("")
    $("#errorPassword").text("")
    const email=sessionStorage.getItem("email");
    console.log(email)
   }
 
 })