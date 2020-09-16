console.log("03 - Poo");

//////////////////////////////////////////////////////////////////

function Personne (nom, prenom, pseudo) 
{
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function()
  {
  	 return this.nom + " " + this.prenom + " " +  this.pseudo;
  }
  
}

var Jules = new Personne('Jules','LEMAIRE','jules77');
var Paul = new Personne('Paul','LEMAIRE','paul44');

function afficherPersonne(pers)
{
	console.log(pers.nom);
	console.log(pers.prenom);
	console.log(pers.pseudo);
	console.log(pers.getNomComplet());

}

console.log(afficherPersonne(Jules));
console.log(afficherPersonne(Paul));
