const batterCard = function(name, team, position) {
    this.name = name;
    this.team = team;
    this.position = position;
}

const pitcherCard = function(name, team, position) {
    this.name = name;
    this.team = team;
    this.position = position;
}

var pitchersSpot = new batterCard("Pitcher's Spot", "CHI", "P");

pitchersSpot.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var contreras = new batterCard("Willson Contreras", "CHI", "C");

contreras.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var russell = new batterCard("Addison Russell", "CHI", "SS");

russell.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var baez = new batterCard("Javy Baez", "CHI", "2B");

baez.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var zobrist = new batterCard("Ben Zobrist", "CHI", "CF");

zobrist.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var schwarber = new batterCard("Kyle Schwarber", "CHI", "LF");

schwarber.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var rizzo = new batterCard("Anthony Rizzo", "CHI", "1B");

rizzo.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var bryant = new batterCard("Kris Bryant", "CHI", "3B");

bryant.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var heyward = new batterCard("Jason Heyward", "CHI", "RF");

heyward.resultColumns = {
  1: {
    2: ["lineout", "out"],
    3: ["groundball to 2b", "out"],
    4: ["groundball to ss", "out"],
    5: ["single", "hit"],
    6: ["single", "hit"],
    7: [15, "single", "lineout to 3b"],
    8: ["single", "hit"],
    9: ["walk"],
    10: ["groundball to 1b", "out"],
    11: ["groundball to 2b", "out"],
    12: ["flyball", "out"]
  },
  2: {
    2: ["flyball to rf", "out"],
    3: ["walk"],
    4: ["homerun", "hit"],
    5: ["homerun", "hit"],
    6: ["homerun", "hit"],
    7: [9, "homerun", "double", "hit"],
    8: [5, "triple", "single", "hit"],
    9: ["walk"],
    10: ["double", "hit"],
    11: [6, "double", "single", "hit"],
    12: ["walk"]
  },
  3: {
    2: ["walk"],
    3: ["walk"],
    4: ["walk"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["flyball to lf", "out"],
    8: ["groundball to ss", "out"],
    9: ["strikeout", "out"],
    10: ["flyball to cf", "out"],
    11: ["strikeout", "out"],
    12: ["walk"]
  }
};

var battingOrder = [heyward, bryant, rizzo, zobrist, schwarber, baez, russell, contreras, pitchersSpot];

var kluber = new pitcherCard("Corey Kluber", "CLE", "P");

kluber.resultColumns = {
  4: {
    2: ["groundball to 2b", "out"],
    3: ["walk"],
    4: ["strikeout", "out"],
    5: ["homerun", "hit"],
    6: [6, "homerun", "single", "hit"],
    7: [3, "triple", "flyball to cf"],
    8: [2, "double", "flyball to cf"],
    9: ["single", "hit"],
    10: ["single", "hit"],
    11: ["walk"],
    12: ["groundball", "out"]
  },
  5: {
    2: ["groundball to 1b", "out"],
    3: ["groundball to p", "out"],
    4: ["groundball to ss", "out"],
    5: [1, "single", "lineout to 1b"],
    6: ["walk"],
    7: ["strikeout", "out"],
    8: ["strikeout", "out"],
    9: ["strikeout", "out"],
    10: ["groundball to ss", "out"],
    11: ["groundball to 1b", "out"],
    12: ["groundball to 1b", "out"]
  },
  6: {
    2: ["groundball to 2b", "out"],
    3: ["flyball to lf", "out"],
    4: ["groundball to 3b", "out"],
    5: ["strikeout", "out"],
    6: ["strikeout", "out"],
    7: ["groundball to 3b", "out"],
    8: ["strikeout", "out"],
    9: ["strikeout", "out"],
    10: ["flyball", "out"],
    11: ["flyball", "out"],
    12: ["groundball to 2b", "out"]
  }
};
