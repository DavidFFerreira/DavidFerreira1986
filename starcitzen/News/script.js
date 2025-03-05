function googleLogin() {
    alert("Login com Google ainda não implementado.");
}

function facebookLogin() {
    alert("Login com Facebook ainda não implementado.");
}

function appleLogin() {
    alert("Login com Apple ainda não implementado.");
}

// Cookies
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-consent").style.display = "block";
    }
});

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-consent").style.display = "none";
}

function rejectCookies() {
    document.getElementById("cookie-consent").style.display = "none";
}
