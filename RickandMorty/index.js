

async function getCharactersList() {
    try{
    const response = await fetch("https://rickandmortyapi.com/api/character?status=alive");
    const charactersList = await response.json();
    generateCharactersList(charactersList)
   }catch (error) {
    handelError(error);
  }
  }

  function generateCharactersList(charactersList){
    console.log(charactersList)
    const {results} = charactersList
    let list =  document.getElementById("myList");
    let displaeidItems = []

    for (let index = 0; index < results?.length; index++) {
        const element = results[index];
        const item = `
        <li class='item'>
       
        <img src="${element.image}" style ="width: 60px"></img>
        <p> name   :${element.name} </p>
        <p> gender :${element.gender}</p>
        <p> status :${element.status}</p>
        <p> location :${element.location.name}</p>
        </li>
      `
      displaeidItems.push(item);
    }
    list.innerHTML= displaeidItems.join('');
}

function handelError(error){
    console.log('There was an error', error);

}

getCharactersList()

