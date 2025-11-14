function ajouterLigne() {
    // Récupérer le tableau par son ID
    var nom = document.getElementById("nom").value;
    var age = document.getElementById("age").value;
    
    if (nom == "" || age == "") {
        alert("Veuillez remplir les deux champs.");

    } else if (age < 10 || age > 20) {
        alert("L'âge doit être compris entre 10 et 20 ans.");
    } else {
        var tableau = document.getElementById("tableau");
        var nouvelleLigne = tableau.insertRow(-1);
        var celluleNom = nouvelleLigne.insertCell(0);
        var celluleAge = nouvelleLigne.insertCell(1);
        celluleNom.innerHTML = nom;
        celluleAge.innerHTML = age;
    }
}
