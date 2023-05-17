$(document).ready(()=>{
    const email=$("#email")
    const password=$("#password")
    let errorEmail;
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorPassword;
  
 email.blur((e)=>{
    if(!email.val()){
        errorEmail="Veillez remplir le champs pour continuer";
        $("#errorEmail").text(errorEmail);
     }else if(!regex.test(email.val())){
        errorEmail="Votre addresse email est invalide";
        $("#errorEmail").text(errorEmail);
     }else{
        $("#errorEmail").text("");
        errorEmail="";
     }
 })
 password.blur((e)=>{
    if(!password.val()){
        errorPassword="Le mot de password est requise";
        $("#errorPassword").text(errorPassword)
       }else if(password.val().length < 8){
        errorPassword="Le mot de password est trop court";
        $("#errorPassword").text(errorPassword)
       }
    else{
        $("#errorPassword").text("");
        errorPassword="";
    }
 })

$("form").submit((e)=>{
        e.preventDefault();
        if(!errorEmail && !errorPassword){
            window.location.href="../index.html";
        }
    })
})