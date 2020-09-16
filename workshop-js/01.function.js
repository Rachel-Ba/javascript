console.log("01 - Fonctions");

//////////////////////////////////////////////////////////////////

var nombre1 = 10;
var nombre2 = 20; 

function additionner(nb1,nb2) 
{
  nb3 = nb1 + nb2;
  return nb3;
}

console.log("resultat1 = "+ additionner(nombre1,nombre2));

//////////////////////////////////////////////////////////////////

somme = additionner(nombre1,nombre2);

console.log("resultat2 = "+ somme);

//////////////////////////////////////////////////////////////////

function multiplier(nb1,nb2)
{
	nb3 = nb1 * nb2;
	return nb3;
}

multiplication = multiplier(nombre1,nombre2);

console.log("resultat3 = " + multiplication);

//////////////////////////////////////////////////////////////////

function afficherOperation(nomOperation,nb1,nb2)
{
	switch(nomOperation) 
	{
	  case "Addition" :
	  nb3 = nb1 + nb2;
	  return console.log("Somme(" + nb1 + "," + nb2 +") = " + nb3);
	  case "Multiplication" :
	  nb3 = nb1 * nb2;
	  return console.log("Multiplication(" + nb1 + "," + nb2 +") = " + nb3);
	  case "Soustraction" :
	  nb3 = nb1 - nb2;
	  return console.log("Soustraction(" + nb1 + "," + nb2 +") = " + nb3);
	  break ;
	}

}

console.log(afficherOperation("Addition",20,40));
console.log(afficherOperation("Multiplication",10,20));
console.log(afficherOperation("Soustraction",15,5));

