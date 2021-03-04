/ SPREAD AND DESTRUCTURING EXERCISE

// 1a
const mcuShows = [
  "The Falcon And The Winter Soldier",
  "WandaVision"
];

// 1b
const starWarsShows = [
  "The Mandalorian",
  "The Clone Wars"
];

// 1c
const disneyPlusShows = [
  ...mcuShows,
  ...starWarsShows,
  "Muppets Now"
];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
  action: "Extraction",
  drama: "The Irishman"
};

// 2b
const disneyPlusMovies = {
  musical: "Hamilton",
  drama: "Togo"
};

// 2c
const streamingMovies = {
  ...disneyPlusMovies,
  ...netflixMovies,
  comedy: "Shazam!"
};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
  "PJ Masks",
  "Jake and the Neverland Pirates"
];

// 3b
const [pj, jake] = disneyJunior;

// 3c
console.log(pj, jake);

// 4a
const avengers = {
  
};

// 4b
const {captainAmerica, theHulk} = avengers;

// 4c
console.log(captainAmerica, theHulk);

// 4d
const moreAvengers = {
  blackWidow: "Natasha Romanoff",
  hawkeye: "Clint Barton",
  ironMan: "Tony Stark"
};

// 4e
const{blackWidow: nat, ...others} = moreAvengers;

// 4f
console.log(nat, others);
