// display the site after all the content is loaded
let container = document.getElementById("container");
container.setAttribute("style", "display: none");
window.addEventListener("load", () => {
  let loader = document.getElementById("loader");
  loader.setAttribute("style", "opacity: 0; pointer-events: none");
  setTimeout(() => {
    loader.remove();
  }, 1000);
  container.setAttribute("style", "display: block");
});
// hide placeholder on focus and show on blur
let inputs = document.querySelectorAll("input , textarea");
inputs.forEach((input) => {
  if (input.type != "submit") {
    let placeholder = input.placeholder;
    input.addEventListener("focus", () => {
      input.setAttribute("placeholder", "");
    });
    input.addEventListener("blur", () => {
      input.setAttribute("placeholder", placeholder);
    });
  }
});
// my projects
let projects = [
  {
    name: "Reaction Time Game",
    description:
      "Created Using Javascript The Player Have To Click The Balls As Fast As He Can Before They Disappear And After The Timer Ends The Result Shows",
    image: "images/reaction_time.png",
    link: "https://reactiontimetester.netlify.app/",
  },
  {
    name: "JS Clock",
    description: "Analog Clock Using Javascipt",
    image: "images/JS_Clock.png",
    link: "https://js-analogclock.netlify.app",
  },
  {
    name: "JS Calculator",
    description:
      "Simple Calculator Using Javascipt That Can Solve Non Complex Operatinos",
    image: "images/JS_Calculator.png",
    link: "https://slick-js-calculator.netlify.app",
  },
  {
    name: "Cinema",
    description:
      "This Site Represents A Cinema House Gallery The Owner Add The Films He Got And The Users Can Watch The Movie Trailer And Also Make A Reservation To Watch It",
    image: "images/Cinema.png",
    link: "#",
  },
  {
    name: "Lyrics Finder",
    description:
      "Using MusixMatch API You Can Search For Songs To Get Their Lyrics",
    image: "images/MusixMatch_API_Lyrics_Finder.png",
    link: "https://musixmatch-lyrics-finder.netlify.app/",
  },
  {
    name: "eCommerce",
    description:
      "Created With PHP The Site Allows Us To View Laptops From Different Brands , Signin , Login , Leave Comments On A Laptop Page Which Show The Specs Of It",
    image: "images/eCommerce.png",
    link: "#",
  },
  {
    name: "	Discord Bot",
    description:
      "Bot Created Using DiscordJS & NodeJS That Can Join Channels , Add Users , Kick Users , Ban Users And Get GIFs Using The GIPHY API",
    image: "images/discord_bot.png",
    link: "#",
  },
  {
    name: "Snake Game",
    description: "The Popular Snake Game Created With Javascript",
    image: "images/snake_game.png",
    link: "https://js-simple-snake-game.netlify.app",
  },
  {
    name: "Apex Legends Stats Tracker",
    description:
      "Using The Apex Legends API We Retrieve The Data Of Specific Player From All Platforms That The Game Is Available On",
    image: "images/apex_legends_tracker.png",
    link: "https://blooming-inlet-19317.herokuapp.com/",
  },
  {
    name: "Github Account Finder",
    description:
      "Using The Github API We Retrieve The Data Of Specific Account And Show His Latest Repos And Some Of His Public Stats",
    image: "images/github_account_finder.png",
    link: "https://github-accountfinder.netlify.app",
  },
];
// inserting the projects to the document
let projectsContainer = document.getElementById("projects-container");
projects.forEach((project) => {
  projectsContainer.innerHTML += `<div class='project' data-aos="fade-up"><img src='${project["image"]}' alt='project image' /><div class='description'><h2>${project["name"]}</h2><p>${project["description"]}</p><a href='${project["link"]}' target='_blank'>Check The Project</a></div></div>`;
});
// scroll top button
let scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
