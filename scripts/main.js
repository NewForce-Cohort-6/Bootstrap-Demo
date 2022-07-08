console.log("Welcome to the main module")
const areas = [{
    id: 1,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",
    name: 'Chamfort River',
    description: 'A river area in the northeast'
}, {
    id: 2,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",
    name: 'Lost Wolf Hiking Trail',
    description: 'Train in the northern section'
}, {
    id: 3,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",

    name: 'The Lodge',
    description: 'Lodge with hotel and restaurant in the northwest section'
}, {
    id: 4,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",

    name: 'Gander River',
    description: 'A river in the southwest section'
}, {
    id: 5,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",

    name: 'Campgrounds',
    description: 'Camping, offices, and play areas in the southern section'
}, {
    id: 6,
    img: "https://rangerrick.org/wp-content/uploads/2022/04/Sea-Otter-Mom-and-Baby-by-Suzi-Eszterhas-Minden-Pictures.jpg",

    name: 'Pine Bluffs Trails',
    description: 'Network of trails for all levels of hikers in the southeast section. Beginner trail provides food vendors'
}]

areas.forEach(obj => {
    document.querySelector("#card-container").innerHTML += `
    <div class="card m-2 " style="width: 18rem;">
    <img src="${obj.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      <p class="card-text">${obj.description}</p>
    </div>
  </div>

  `
})