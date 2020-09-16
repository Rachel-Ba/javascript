console.log("02 - Tableaux");

//////////////////////////////////////////////////////////////////

var villes = ['nantes','paris','saint-nazaire','angers','le mans'];

//////////////////////////////////////////////////////////////////

villes.forEach(function(villes)
{
	console.log(villes);
});

//////////////////////////////////////////////////////////////////

function lettreADansToutesLesVilles(vil)
{
	return vil.indexOf('a') != -1
}

console.log(villes.every(lettreADansToutesLesVilles));

//////////////////////////////////////////////////////////////////

function auMoinsUneVilleAvecUnTiret(vil)
{
	return vil.indexOf('-') != -1
}

console.log(villes.some(auMoinsUneVilleAvecUnTiret));

//////////////////////////////////////////////////////////////////

function villesSansTiretSansEspace(vil)
{
	var villeFiltre = new Array();
	var j = 0;

	for (i = 0; i < vil.length; i++)
	{
		if ((vil[i].indexOf('-') == -1) && (vil[i].indexOf(' ') == -1))
		{
			villeFiltre[j] = vil[i];
			j++;
		}

	}
	return villeFiltre;
}

console.log("villesSansTiretSansEspace = " + villesSansTiretSansEspace(villes))

//////////////////////////////////////////////////////////////////

console.log(
	villes.filter(function(vil)
			{
				return vil.endsWith('s');
			})
		   .map(function(vil)
			{
				return vil.toUpperCase();
			}));



