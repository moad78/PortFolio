function resultat(){
    var qt1 = document.getElementById("l12").value;
    var prx1 =document.getElementById("l13").value;
    var qt2 = document.getElementById("l22").value;
    var prx2 = document.getElementById("l23").value;
    var qt3 = document.getElementById("l32").value;
    var prx3 = document.getElementById("l33").value;

    var r1 = Number(qt1) * Number(prx1) ;
    var r2 = Number(qt2) * Number(prx2) ;
    var r3 = Number(qt3) * Number(prx3) ;

    document.getElementById("resultat1").value = r1;
    document.getElementById("resultat2").value = r2;
    document.getElementById("resultat3").value = r3;
    var total = r1 + r2 + r3 ;
    document.getElementById("resultat4").value = total;
}

function renitialiser(){
    document.getElementById("l11").value = "";
    document.getElementById("l31").value = "";
    document.getElementById("l21").value = "";
    document.getElementById("l12").value = "";
    document.getElementById("l13").value = "";
    document.getElementById("l22").value = "";
    document.getElementById("l23").value = "";
    document.getElementById("l32").value = "";
    document.getElementById("l33").value = "";
    document.getElementById("resultat1").value = "null";
    document.getElementById("resultat2").value = "null";
    document.getElementById("resultat3").value = "null";
    document.getElementById("resultat4").value = "null";

}

function impression(){
    window.print();
}
