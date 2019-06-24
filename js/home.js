document.addEventListener("DOMContentLoaded", function() {
    function valider(form) {

        if (form.navn.value.length > 0) {
            alert(form.navn.value)
            document.getElementById("navn").style.background = "transparent";
        } else {
            alert("du har ikke skrevet et navn");
            form.navn.focus();
            document.getElementById("navn").style.background = "#ffaaaa";
            return false;
        }

        if (form.email.value.length == 0) {
            alert("du har ikke skrevet et email");
            form.email.focus();
            document.getElementById("email").style.background = "#ffaaaa";
            return false;
        } else {
            if(validateEmail(form.email.value)){
                alert(form.email.value)
                document.getElementById("email").style.background = "transparent";
            } else { 
                alert("du har ikke skrevet en email");
                form.email.focus();
                document.getElementById("email").style.background = "#ffaaaa";
                return false;
            }
            
        }

        function validateEmail(email){
            let re = /(.+)@(.+){2,}\.(.+){2,}$/;
            return re.test(String(email).toLowerCase());
        }

        if (form.besked.value.length > 0) {
            alert(form.besked.value)
            document.getElementById("besked").style.background = "transparent";
        } else {
            alert("du har ikke skrevet et besked");
            form.besked.focus();
            document.getElementById("besked").style.background = "#ffaaaa";
            return false;
        }
}
})