$().ready(initializeBackground);

function initializeBackground() {
    let darkMode = getCookie("dark-mode") === "true";
    updateElements(darkMode);
}

function updateElements(darkMode) {
    let background = document.getElementById("background");
    let classes = background.classList;

    if (darkMode) {
        classes.remove("light");
        classes.add("dark");
    } else {
        classes.remove("dark");
        classes.add("light");
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
