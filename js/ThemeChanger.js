/**
 * @author Bryan Kho, W3C
 */

/*function ThemeDefault() {
    var findlink = document.getElementsByClassName("theme");
    findlink[0].href = "defaultstyles.css";
    document.getElementById("BekijkTafels").innerHTML = "Bekijk tafels";
}
function ThemeTrello() {
    var findlink = document.getElementsByClassName("theme");
    findlink[0].href = "TrelloStyle.css";
    document.getElementById("BekijkTafels").innerHTML = "Bekijk de tafels met Taco from Trello";
}
function ThemeDC() {
    var findlink = document.getElementsByClassName("theme");
    findlink[0].href = "DCStyle.css";
    document.getElementById("BekijkTafels").innerHTML = "Bekijk tafels";
}
function ThemeMotuPatlu() {
    var findlink = document.getElementsByClassName("theme");
    findlink[0].href = "MotuPatluStyle.css";
    document.getElementById("BekijkTafels").innerHTML = "Bekijk tafels";
}
*/
//var x = document.cookie;

function changeTheme(themeCookie) {
    var findlink = document.getElementsByClassName("theme");
    switch (themeCookie) {
        default:
            findlink[0].href = "css/defaultstyles.css";
            feedbackimageperfect.src = "";
            feedbackimagegood.src = "";
            feedbackimagebad.src = "";
            feedbackimagedisasterous.src = "";
            break;
        case "Trello":
            findlink[0].href = "css/TrelloStyle.css";
            feedbackimageperfect.src = "images/taco-trophy.png";
            feedbackimagegood.src = "images/taco-celebrate.png";
            feedbackimagebad.src = "images/taco-embarrassed.png";
            feedbackimagedisasterous.src = "images/taco-angry.png";
            break;
        case "DC":
            findlink[0].href = "css/DCStyle.css";
            feedbackimageperfect.src = "";
            feedbackimagegood.src = "";
            feedbackimagebad.src = "";
            feedbackimagedisasterous.src = "";
            break;
        case "MotuPatlu":
            findlink[0].href = "css/MotuPatluStyle.css";
            feedbackimageperfect.src = "images/skateboard.png";
            feedbackimagegood.src = "images/motu.png";
            feedbackimagebad.src = "images/patlu.png";
            feedbackimagedisasterous.src = "images/motupatluangery.png";
            break;
        case "SatangJabang":
            findlink[0].href = "css/SatangJabangStyle.css";
            feedbackimageperfect.src = "";
            feedbackimagegood.src = "";
            feedbackimagebad.src = "images/dooiesnoek.png";
            feedbackimagedisasterous.src = "images/voedsel.png";
            break;
        case "None":
            findlink[0].href = "css/None.css";
            feedbackimageperfect.src = "";
            feedbackimagegood.src = "";
            feedbackimagebad.src = "";
            feedbackimagedisasterous.src = "";
            break;
        case "Roy":
            findlink[0].href = "css/Roy.css";
            feedbackimageperfect.src = "images/roy.png";
            feedbackimagegood.src = "images/roy.png";
            feedbackimagebad.src = "images/roy.png";
            feedbackimagedisasterous.src = "images/roy.png";
            autoplay.src = "https://www.youtube.com/embed/7ynzeH7MME8?autoplay=1";
            break;
        case "Wireframe":
            findlink[0].href = "css/wireframe.css";
            feedbackimageperfect.src = "images/imageplaceholder.svg";
            feedbackimagegood.src = "images/imageplaceholder.svg";
            feedbackimagebad.src = "images/imageplaceholder.svg";
            feedbackimagedisasterous.src = "images/imageplaceholder.svg";
            break;
        case "SpeciaalVoorArno":
            findlink[0].href = "css/SpeciaalVoorArno.css";
            feedbackimageperfect.src = "images/arno.png";
            feedbackimagegood.src = "images/arno.png";
            feedbackimagebad.src = "images/arno.png";
            feedbackimagedisasterous.src = "images/arno.png";
            autoplay.src = "https://www.youtube.com/embed/JNJJ-QkZ8cM?autoplay=1";
            
            
            var i = 0;
            function change() {
              var doc = document.getElementById("content");
              var color = ["help", "wait", "not-allowed", "move", "progress", "nwse-resize", "no-drop", "grabbing", "text", "url(images/arno.cur)"];
              doc.style.cursor = color[i];
              i = (i + 1) % color.length;
            }
            setInterval(change, 10);
            break;
    }
}

function removeCookieAccept(accept) {
    switch (accept) {
        case "accepted":
            acceptCookies.style.display = "none";
            break;
        default:
            acceptCookies.style.display = "block";
            break;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    
    if (exdays == null) {
        var expires = "";
    }
    else {
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}