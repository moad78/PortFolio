function mention(){
    var n1 = prompt("Entrez une premiere note");
    var n2 = prompt("Entrez une deuxieme note");
    var n3 = prompt("Entrez une troisieme note");

    var somme = Number(n1)+ Number(n2) + Number(n3)

    var moyenne = somme/3

    if (moyenne<10){
        document.write("Redoublant");
    }
    else if (10< moyenne <12){
        document.write("Admis - Passable");
    }
    else if (12< moyenne <14){
        document.write("Admis bien");
    }
    else {
        document.write("Redoublant");
    }
}

function temperature(){
    var temp = prompt("Veuillez entrer une température en °C")

    if (temp<10){
        document.write("Froid");
    }
    else if (10<temp<25){
        document.write("Normal");
    }
    else {
        document.write("Chaud");
    }

}

function comparaison(){
    var p1 = prompt("Veuillez saisir le premier nombre")
    var p2 = prompt("Veuillez saisir le deuxieme nombre")

    if (p1>p2){
        document.write("Le premier nombre est le plus grand : " + p1 + "</br>" );
        document.write("Le le pus petit est le deuxieme chiffre : " + p2);
    }
    else {
        document.write("Le deuxieme nombre est le plus grand : " + p2 + "</br>" );
        document.write("Le pus petit est le premier nombre : " + p1);
    }

}