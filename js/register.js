export let emailValue;
$(document).ready(()=>{
    const email=$("#email");
   const btnSubmit = $("#btnSubmit")
    let errorEmail;
    
const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // w => [A-Za-z0-9]
btnSubmit.click((e)=>{
    e.preventDefault();
   if(!email.val()){
      errorEmail="Veillez remplir le champs pour continuer";
      $("#errorEmail").text(errorEmail);
   }else if(!regex.test(email.val())){
      errorEmail="Votre addresse email est invalide";
      $("#errorEmail").text(errorEmail);
   }else{
       sessionStorage.setItem("email", email.val());
      window.location.href="../pages/cmpleteRegister.html";
   }
})


 
})