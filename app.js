

console.clear();

let hits = 0;
let atBats = 0;
let walks = 0;
let strikeOuts = 0;
let outs = 0;
let errors = 0;
let runs = 0;
let ab = 0;

const dieRoll = sides => Math.floor(Math.random() * sides) + 1;

function initialRoll() {
  const initialResults = [];
  //rolling 3 six sided dice
  for (let i = 0; i < 3; i++) {
    initialResults.push(dieRoll(6));
  }

  return initialResults;
}

const secondaryRoll = results => {
  console.log(`Secondary check needed:`);
  console.log(`1 - ${results[0]} = ${results[1]}`);
  console.log(`${results[0] + 1} - 20 = ${results[2]}`);
  const secondaryRoll = dieRoll(20);
  console.log(`rolling a d20: ${secondaryRoll}`)
  secondaryRoll < results[0] ? console.log(results[1]) : console.log(results[2]);
}

const checkHits = results => {
  
  if (results.includes('hit')) {
    hits += 1;
    atBats += 1;
  } else if (results.includes('walk')) {
    walks += 1;
  } else if (results.includes('strikeout')) {
    atBats += 1;
    strikeOuts += 1;
    outs += 1;
  } else {
    atBats += 1;
    outs += 1;
  }
}

const resultLookUp = (batter, pitcher, initialResults) => {
  const redDie = initialResults[0];
  const whiteDice = initialResults[1] + initialResults[2];

  if (initialResults[0] < 4) {
    const batterResults = batter.resultColumns[redDie][whiteDice];

    if (typeof batterResults[0] === "number") {
      secondaryRoll(batterResults);
      checkHits(batterResults);
    } else {
      console.log(`red rolled: ${redDie}`);
      console.log(`white dice totaled: ${whiteDice}`);
      console.log(batterResults[0]);
      checkHits(batterResults);
    }
  } else {
    const pitcherResults = pitcher.resultColumns[redDie][whiteDice];

    if (typeof pitcherResults[0] === "number") {
      secondaryRoll(pitcherResults);
      checkHits(pitcherResults);
    } else {
      console.log(`red rolled: ${redDie}`);
      console.log(`white dice totaled: ${whiteDice}`);
      console.log(pitcherResults[0]);
      checkHits(pitcherResults);
    }
  }
}

const atBat = (batter, pitcher) => {
  
  console.log(`${batter.name} is batting against ${pitcher.name}`);

  resultLookUp(batter, pitcher, initialRoll());
  console.log('----------');
}

while (outs < 3) {
    atBat(battingOrder[ab], kluber);
    if (ab < 8) { ab++ } else { ab = 0 }
}

const battingAverage = (hits/atBats).toFixed(3);

console.log(`total atBats: ${atBats} | total hits: ${hits} | batting average: ${battingAverage.replace(/^0+/, '')}`);
console.log(`total strikeouts: ${strikeOuts} | total walks: ${walks} | total outs: ${outs}`);
  
  
