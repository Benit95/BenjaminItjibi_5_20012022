//récupérer les données depuis l’API
function toRecover (){
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}
toRecover ()



  //Insérer chaque élément dans la page d’accueil

