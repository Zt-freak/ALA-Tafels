/**
 * @author Bryan Kho
 */
function setTables(nr) {
    var i=1
    if (i=1) {
        output.innerHTML = null;
    }
    for (i=1; i <= 10; i++) {
        var answer = i * nr;
        output.innerHTML = output.innerHTML + nr + " &#215; " + i + " = " + answer + "<br>" ;
    }
}