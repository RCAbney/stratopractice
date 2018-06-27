

console.clear();

let hits = 0;
let atBats = 0;
let walks = 0;
let strikeOuts = 0;
let outs = 0;
let errors = 0;
let runs = 0;
let ab = 0;
let basePath = [0, 0, 0];

console.log(`bases empty at start of test: ${basePath}`);

function runCheck() {
  if (basePath[0] === 1) {
    console.log("run scored");
    runs++;
  }
}

function advanceHitter() {
    basePath.push(1);
    runCheck();
    basePath.shift();
    console.log(basePath) 
}

function advanceBases(n) {
    for (i=0; i < n; i++) {
      basePath.push(0);
      runCheck();
      basePath.shift();
      console.log(basePath);      
    }
}

function single() { 
  console.log(`start single`);
    //check to see if runner is in scoring position
    if (basePath[1] === 1) {
      runs++;
      console.log('run scored');
      basePath[1] = 0;
    }
  
    if (basePath[0] === 1) {
      runs++;
      console.log('run scored');
      basePath[0] = 0;
    }
    advanceBases(1);
    advanceHitter();
    hits+=1;
    atBats+=1;
  console.log(`end single`);
}

// todo: figure out how to advance the batter but account for open bases //

function walk() { 
  console.log(`start walk`);
  if (basePath[1] === 0 && basePath[2] === 0) {
    basePath[2] = 1;
  } else {
    advanceHitter();
  }
  console.log(basePath);
  console.log(`end walk`);
  walks+=1;
}

function double() {
  console.log(`start double`);
    advanceHitter();
    advanceBases(1);
  console.log(`end double`);
    hits+=1;
    atBats+=1;
}

function triple() {
  console.log(`start triple`);
    advanceHitter();
    advanceBases(2);
  console.log(`end triple`);
    hits+=1;
    atBats+=1;
}

function homerun() {
  console.log(`start homer`);
    advanceHitter();
    advanceBases(3);
    console.log(`end homer`);
    hits+=1;
    atBats+=1;
}

function out() {
  outs+=1;
  atBats+=1;
  console.log(`out made | ${outs} outs`);
}

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
  //secondaryRoll < results[0] ? console.log(results[1]) : console.log(results[2]);
  if (secondaryRoll < results[0]) {
    console.log(results[1]);
    if (results[1] === 'single') { single(); } else if (results[1] === 'double') { double(); } else if (results[1] === 'triple') { triple(); } else if (results[1] === 'homerun') { homerun(); } else if (results[1] === 'walk') { walk(); } else { out(); }
  } else {
    console.log(results[2]);
    if (results[2] === 'single') { single(); } else if (results[2] === 'double') { double(); } else if (results[2] === 'triple') { triple(); } else if (results[2] === 'homerun') { homerun(); } else if (results[2] === 'walk') { walk(); } else { out(); }
  }
}

const checkHits = results => {
  
  if (results.includes('hit')) {
    if (results[0] === 'single') { single(); } else if (results[0] === 'double') { double(); } else if (results[0] === 'triple') { triple(); } else if (results[0] === 'homerun') { homerun(); }
  } else if (results.includes('walk')) {
    walk();
  } else if (results.includes('strikeout')) {
    strikeOuts+=1;
    out();
  } else {
    out();
  }
}

const resultLookUp = (batter, pitcher, initialResults) => {
  const redDie = initialResults[0];
  const whiteDice = initialResults[1] + initialResults[2];

  if (initialResults[0] < 4) {
    const batterResults = batter.resultColumns[redDie][whiteDice];

    if (typeof batterResults[0] === "number") {
      secondaryRoll(batterResults);
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
    } else {
      console.log(`red rolled: ${redDie}`);
      console.log(`white dice totaled: ${whiteDice}`);
      console.log(pitcherResults[0]);
      checkHits(pitcherResults);
    }
  }
}

const atBat = (batter, pitcher) => {
  console.log('----------');
  console.log(`${batter.name} is batting against ${pitcher.name}`);

  resultLookUp(batter, pitcher, initialRoll());
  console.log('----------');
}

for (let inning = 1; inning < 10; inning++) {
  console.log(`#####################`);
  console.log(`inning# ${inning}`);
  console.log(`#####################`);
  while (outs < 3) {
      atBat(battingOrder[ab], kluber);
      if (ab < 8) { ab++ } else { ab = 0 }
  }

  // end inning
  const battingAverage = (hits/atBats).toFixed(3);

  console.log(`total runs: ${runs}`);
  console.log(`total atBats: ${atBats} | total hits: ${hits} | batting average: ${battingAverage.replace(/^0+/, '')}`);
  console.log(`total strikeouts: ${strikeOuts} | total walks: ${walks} | total outs: ${outs}`);

  // empty bases of runners and clear all outs //
  basePath = [0,0,0];
  outs = 0;
}


  
  
