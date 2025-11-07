function afftab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>"+ (i+1) +"</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function afftab2(){
    var X = prompt("Entrez le nombre de ligne");
    document.write("<table border=2px width=30%");
    for(let i=1; i<=X; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function cnt(){
    var login = prompt("Donnez votre nom d'utilisateur");
    var mdp = prompt("Donnez votre mot de passe");
    if(login=="admin" && mdp=="admin"){
    document.write("Bienvenue" + login);}
    else {alert("Accès Refeusé")}    
}

function cnt2()
    {window.location.href="Identification.html"}

function login(){
    var login =document.getElementById("t1").value;
    var mdp = document.getElementById("t2").value;
    if(login=="admin" && mdp=="admin"){
    window.location.href="oui.html"}
    else {window.location.href="non.html"}    
}


function cdc(){
    var mot = prompt("Donnez un mot");
    document.write(mot.toUpperCase()+"<br>");
    document.write(mot.toLowerCase()+"<br>");
    document.write("Le mot contient " + mot.length +"caractères"+"<br>");
    document.write("La première lettre est" + mot.substr(0,1) +"<br>");
        

}
