$().ready(initializeBackground);

function initializeBackground() {
    let darkMode = getCookie("dark-mode") === "true";
    updateElements(darkMode);
}

function updateElements(darkMode) {
    let background = document.getElementById("background");
    let header = document.getElementById("header");
    let classes = background.classList;

    if (darkMode) {
        classes.remove("light");
        classes.add("dark");
        header.title = "Too dark for ya? Click me to brighten things up!";
    } else {
        classes.remove("dark");
        classes.add("light");
        header.title = "Too bright for ya? Click me to darken things up!";
    }
    if (!classes.contains("slow")) {
        setTimeout(function() {
            classes.add("slow")
            let others = document.getElementsByClassName("enlarge");
            for (let i = 0; i < others.length; i++) {
                others[i].classList.add("slow");
            }
        }, 100);
    }
}

function switchBackground() {
    let darkMode = getCookie("dark-mode") === "true";
    setCookie("dark-mode", darkMode ? "false" : "true", 100);
    updateElements(!darkMode);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
