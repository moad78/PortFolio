//DOM

function recupValues() {
  let ecran1 = parseFloat(document.getElementById("t1").value);
  let ecran2 = parseFloat(document.getElementById("t2").value);
  return [ecran1, ecran2];}

// Affichage résultat
function ecranResultat(resultat) {
  document.getElementById("t3").value = resultat;
}

// Addition
function addition() {
  let [ecran1, ecran2] = recupValues();
  ecranResultat(ecran1 + ecran2);
}

// Soustraction
function soustraction() {
  let [ecran1, ecran2] = recupValues();
  ecranResultat(ecran1 - ecran2);
}

// Multiplication
function multiplication() {
  let [ecran1, ecran2] = recupValues();
  ecranResultat(ecran1 * ecran2);
}

// Division 
function division() {
  let [ecrqn1, ecran2] = recupValues();
  if (n2 === 0) {
    alert("Erreur : Division par zéro est interdit !");
    ecranResultat("Erreur");
  } else {
    ecranResultat(ecran1 / ecran2);
  }
}

// Permutation 
function permute() {
  let t1 = document.getElementById("t1");
  let t2 = document.getElementById("t2");

  let temp = t1.value;
  t1.value = t2.value;
  t2.value = temp;
}


// Vérification de parité du résultat
function parite() {
  let resultat = parseFloat(document.getElementById("t3").value);

  if (isNaN(resultat)) {
    alert("Calculer un résultat avant de tester la parité.");
    return;
  }

  if (resultat % 2 === 0) {
    document.getElementById("t4").value = "Pair";
  } else {
    document.getElementById("t4").value = "Impair";
  }
}

function effacer() {
  document.getElementById("t1").value = "";
  document.getElementById("t2").value = "";
  document.getElementById("t3").value = "";
  document.getElementById("t4").value = "";
}