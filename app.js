
let noPokemon = document.getElementById("No_Pokedex");

let nombrePokemon = document.getElementById("nombre-pokemon");
let imagenPokemon = document.getElementById("imagen-pokemon");
let tipo1Pokemon = document.getElementById("tipo1");

let vida = document.getElementById("Health_points");
let ataquePunto = document.getElementById("Attacks");
let defensa = document.getElementById("Defense");
let velocidad = document.getElementById("Speed");
let movimiento = document.getElementById("Movement");

const PeticionApi = async (id) => {
  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const pokemon = {
      no: data.id,
      img: Math.floor(Math.random() * 100) == 15 ?  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      nombre: data.name,
      tipo1: data.types[0].type.name,
      tipo2: data.types.length > 1 ? " / " + data.types[1].type.name : "",
      vida: data.stats[0].base_stat,
      ataques: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat,
      movimiento: data.moves[0].move.name,
      movimiento2: data.moves[1].move.name,
    };
    noPokemon.innerText = "Numero en pokedex: " +pokemon.no;
    nombrePokemon.innerText = pokemon.nombre;
    imagenPokemon.src = pokemon.img;
    tipo1Pokemon.innerText = pokemon.tipo1 + pokemon.tipo2;
    vida.innerText = "HP : " + pokemon.vida;
    ataquePunto.innerText = "Attacks : " + pokemon.ataques;
    defensa.innerText = "Defense : " + pokemon.defensa;
    velocidad.innerText = "Speed : " + pokemon.velocidad;
    movimiento.innerText = "Movements : " + pokemon.movimiento + " / " +pokemon.movimiento2;
    
    agregarClasesEstilo(pokemon.tipo1);
    
    imagenPokemon.src == `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png` ? alert("Shinyyyyyyyyyy") : "" ;
    
  } catch (error) {
    console.log(error);
  }
};



function limpiarClasesEstilo() {
  const estilos = [
    "water",
    "psychic",
    "grass",
    "fire",
    "electric",
    "ghost",
    "rock",
    "bug",
    "poison",
    "fairy",
    "fighting",
    "ice",
    "ground",
    "dragon",
  ];

  const elementos = [
    document.getElementById("pcc"),
    document.getElementById("bg"),
    document.getElementById("cnt"),
  ];

  elementos.forEach((elemento) => {
    estilos.forEach((estilo) => {
      elemento.classList.remove(`--pcc-${estilo}`);
      elemento.classList.remove(`--bg-${estilo}`);
      elemento.classList.remove(`--content-${estilo}`);
    });
  });
}

function agregarClasesEstilo(estilo) {
  const cardColors = {
    pcc: document.getElementById("pcc"),
    bg: document.getElementById("bg"),
    cnt: document.getElementById("cnt"),
  };

  cardColors.pcc.classList.add(`--pcc-${estilo}`);
  cardColors.bg.classList.add(`--bg-${estilo}`);
  cardColors.cnt.classList.add(`--content-${estilo}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (1010 - 1)) + 1;
  PeticionApi(numeroPokemon);
});



function cambiarPokemon() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (1010 - 1)) + 1;
  PeticionApi(numeroPokemon);
}


function primerGeneracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
  PeticionApi(numeroPokemon);
}


function segundaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (251 - 151)) + 151;
  PeticionApi(numeroPokemon);
}

function terceraGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (386 - 251)) + 251;
  PeticionApi(numeroPokemon);
}

function cuartaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (493 - 386)) + 386;
  PeticionApi(numeroPokemon);
}

function quintaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (649 - 493)) + 493;
  PeticionApi(numeroPokemon);
}

function sextaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (721 - 649)) + 649;
  PeticionApi(numeroPokemon);
}


function septimaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (809 - 721)) + 721;
  PeticionApi(numeroPokemon);
}


function octavaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (905 - 809)) + 809;
  PeticionApi(numeroPokemon);
}

function novenaGeracion() {
  limpiarClasesEstilo();
  const numeroPokemon = Math.floor(Math.random() * (1010 - 905)) + 905;
  PeticionApi(numeroPokemon);
}
