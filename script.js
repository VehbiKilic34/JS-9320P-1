const dataSet = [
      {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine"
      },
      {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine"
      },
      {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo"
      },
      {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine"
      },
      {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan"
      },
      {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine"
      },
      {
        id: 8,
        name: "R5-D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine"
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine"
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon"
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine"
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu"
      },
      {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk"
      },
      {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia"
      },
      {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia"
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine"
      },
      {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
      },
      {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo"
      },
    ];



    const row = document.querySelector (".row");
    const renderBtn = document.getElementById ("renderBtn");
    const homeworldFiltersContainer = document.querySelector(".homeworlds-filter-container");

    const createCharacterCard = ({pic, name, homeworld = "other" }) => {
        return  `<div class="col-lg-5 charactersCard">
        <img src= "${pic}" alt= "${name}" />
        <h5>${name}</h5>
        <p> ${homeworld} </p>
        </div>`
    };


    const getUniqueHomeworlds = (dataSet) => {
      const homeworldRaw = dataSet.map((item) => item.homeworld ?? "other");
      const homeworldRawLowercase = homeworldRaw.map((item) => item.toLowerCase ());
      return [...new Set(homeworldRawLowercase)];
    };
    
    
    const renderCharacters = (characters) => {
        row.innerHTML = characters.map(createCharacterCard);
    };

const toggleCharacters = () => {
  if (!row.innerHTML) {
    renderCharacters(dataSet);
    renderBtn.textContent = "Hide Characters";
  } else {
    row.innerHTML = "";
    renderBtn.textContent = "Show Characters";
    clearRadioSelection()
  }
};


const createHomeworldFilters = (homeworlds) => {
homeworldFiltersContainer.innerHTML = homeworlds.map(
(homeworld) => 
  `
<div>
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworld}" value="${homeworld}"></input>
  <label class="form-check-input" for="homeworld-${homeworld}"> ${homeworld} </label>
</div>
`
)

 .join("");

};

const filterCharactersByHomeworld = (homeworld) => {
  const filteredCharacters = dataSet.filter((character) => {
    const characterHomeworld = character.homeworld ?? "other"
    return characterHomeworld === homeworld
  });
  renderCharacters(filteredCharacters);
  console.log(filteredCharacters);
};

const addHomeworldFilterListeners = () => {
const checkInputs = document.querySelectorAll(".form-check-input")
checkInputs.forEach((input) => {
  input.addEventListener("click", () =>
  filterCharactersByHomeworld(input.value)
);
});
};

const clearRadioSelection = () => {
  const checkInputs = document.querySelectorAll(".form-check-input")
  checkInputs.forEach((input)=>{
    input.checked = false;
  });
};



document.addEventListener ("DOMContentLoaded", () => {
  renderBtn.addEventListener("click", toggleCharacters);
  const uniqueHomeworlds = getUniqueHomeworlds(dataSet);
  createHomeworldFilters(uniqueHomeworlds); 
  addHomeworldFilterListeners()
});