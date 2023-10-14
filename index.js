const flowersElement = document.getElementById("flowers");
async function loadFlowers() {
    const res = await fetch("https://loginofff.github.io/student-api/flowers.json");
    const flowers = await res.json();
    console.log(flowers);
    flowers.forEach((flower)=>{
      const {name, color, description, image} = flower;
      const cardElement = document.createElement('div');
      const nameElement = document.createElement('span');
      const imageElement = document.createElement('img');
      cardElement.className = "card";
    //   nameElement.className = "card-element title";
      nameElement.classList.add("card-element", "title") ;
      nameElement.textContent = name;
      imageElement.src = image;
      cardElement.append(imageElement,nameElement);
      flowersElement.append(cardElement);
    });
 }
loadFlowers();