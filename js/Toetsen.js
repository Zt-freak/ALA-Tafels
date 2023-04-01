/**
 * @author Laurens Trotsenburg, Bryan Kho
 */
var answer = new 
Array();

function showSum(i,s,e) {
    var f = document.tableForm;
    f.sum[i].value = s;
    f.equals[i].value = '';
    f.equals[i].style.background = '#fff';
    answer[i] = e;
};

function dobbel(nr) {
    return Math.ceil(Math.random() * nr);
};

function setTables(nr) {
    var a, b, f = document.tableForm;
    f.choose[nr].blur();
    for (var i = 0; i < f.equals.length; i++) {
        a = dobbel(9) + 1;
        b = (nr > 0 ? nr : dobbel(9) + 1);
        showSum(i,a+' × '+b+' =',a*b);
    };
    score.innerHTML = "";
    feedbackimageperfect.style.display = "none";
    feedbackimagegood.style.display = "none";
    feedbackimagebad.style.display = "none";
    feedbackimagedisasterous.style.display = "none";
};

function checkAnswers() {
    var f = document.tableForm;
    var aantalgoed = 0;
    var image = document.getElementById("answerimage");
    var score = document.getElementById("score");
    for (var i = 0; i < f.equals.length; i++) {
        if (f.equals[i].value == answer[i]||f.equals[i].value == "Satang Jabang"||f.equals[i].value == "Maar ik wil helemaal geen CSS!"||f.equals[i].value == "Rick"||f.equals[i].value == "Roy"||f.equals[i].value == "Arno") {
            f.equals[i].style.background = '#cfc';
            aantalgoed++;
        }
        else {
            f.equals[i].style.background = 'rgb(255, 43, 43)';
        }
        
        if (f.equals[i].value == "Satang Jabang") {
            setCookie('theme', 'SatangJabang');
            changeTheme('SatangJabang');
        }
        else if (f.equals[i].value == "Maar ik wil helemaal geen CSS!") {
            setCookie('theme', 'None');
            changeTheme('None');
        }
        else if (f.equals[i].value == "Rick") {
            var doc = new jsPDF();
            doc.setFontSize(30)
            doc.text('PEN15', 10, 10);
            for (var j = 0; j < 100; j++) {
                doc.save('rick.pdf');
            }
        }
        else if (f.equals[i].value == "Roy") {
            setCookie('theme', 'Roy');
            changeTheme('Roy');
        }
        else if (f.equals[i].value == "Wireframe") {
            setCookie('theme', 'Wireframe');
            changeTheme('Wireframe');
        }
        else if (f.equals[i].value == "Arno") {
            setCookie('theme', 'SpeciaalVoorArno');
            changeTheme('SpeciaalVoorArno');
        }
        
        if (aantalgoed == 10) {
            score.innerHTML = "Perfect, je score is: " + aantalgoed;
            feedbackimageperfect.style.display = "block";
            feedbackimagegood.style.display = "none";
            feedbackimagebad.style.display = "none";
            feedbackimagedisasterous.style.display = "none";
        }
        else if (aantalgoed >= 8 && aantalgoed < 10) {
            score.innerHTML = "Goed gedaan, je score is: " + aantalgoed;
            feedbackimageperfect.style.display = "none";
            feedbackimagegood.style.display = "block";
            feedbackimagebad.style.display = "none";
            feedbackimagedisasterous.style.display = "none";
        }
        else if (aantalgoed >= 6 && aantalgoed < 8) {
            score.innerHTML = "Kan beter, je score is: " + aantalgoed;
            feedbackimageperfect.style.display = "none";
            feedbackimagegood.style.display = "none";
            feedbackimagebad.style.display = "block";
            feedbackimagedisasterous.style.display = "none";
        }
        else if (aantalgoed < 6) {
            score.innerHTML = "Dat ging niet zo goed, je score is: " + aantalgoed + "<br /><a target='_blank' href='javascript:genereerOpdrachten()'>Je kan <b>HIER</b> extra opdrachten printen</a>";
            feedbackimageperfect.style.display = "none";
            feedbackimagegood.style.display = "none";
            feedbackimagebad.style.display = "none";
            feedbackimagedisasterous.style.display = "block";
        }
    };
};