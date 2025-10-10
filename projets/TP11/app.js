function moyenne(){
    var n1 = prompt("Entrez la premiere note :");
    var n2 = prompt("Entrez la deuxieme note :");
    var n3 = prompt("Entrez la troisieme note :");

    var somme = Number(n1) +  Number(n2) + Number(n3);

    document.write("Voici la somme des notes :" + somme + "</br>");
    var moyenne = somme/3

    document.write("Voici votre moyenne :");

    if (moyenne<10){
        document.write("Non admis");

    }
    else{
        document.write("Admis");
    }
}

function age_verif(){
    let age = prompt("Entrez votre age");
    if (age<18){
        document.write("Vous etes mineur");
        document.bgColor="red"
    }
    else{
        document.write("Vous etes majeur");
        document.bgColor="green"

    }   
}

function prenom(){
    var nom = prompt("Entrez votre nom");
    var prenom = prompt("Entrez votre prenom");

    document.write('<div style="margin:auto; height : 200px;width:300px; color=black; border:2px solid blue;">');
    document.write("Bonjour" + nom + " "+ prenom);
    document.write('</div>');
}

function couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge" || couleur == "red" || couleur == "Red" || couleur == "Rouge" ){
        document.body.style.backgroundColor="red"
    }
    else if (couleur == "bleu" || couleur == "blue" || couleur == "Blue" || couleur == "Bleu" ){
        document.body.style.backgroundColor="bleu"
    }    
    else if (couleur == "Orange" || couleur == "orange" ){
        document.body.style.backgroundColor="orange"
    }    
    else{
        document.write("couleur non comprise");
    }    
}