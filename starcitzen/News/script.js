function googleLogin() {
    alert("Login com Google ainda em desenvolvimento!");
}

function facebookLogin() {
    alert("Login com Facebook ainda em desenvolvimento!");
}

function appleLogin() {
    alert("Login com Apple ainda em desenvolvimento!");
}

function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/";
    document.getElementById("cookie-consent").style.display = "none";
}

function rejectCookies() {
    alert("Cookies recusados! Algumas funções podem não funcionar.");
    document.getElementById("cookie-consent").style.display = "none";
}
