import { CHANGE_TITLE } from '../constants';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import GridGenerator from '../components/hexgrid/GridGenerator';

const gridConfig = {
  width: 800,
  height: 800,
  origin: { x: 0, y: 0 },
  map: 'hexagon',
  mapProps: [ 3 ]
}
// GridGenerator
//       .getGenerator(gridConfig.map)
//       .apply(this, gridConfig.mapProps)
let initialState = {
  strategyCards: {
    initiative: {
      name: "Initiative",
      value: 1,
    },
    diplomacy: {
      name: "Diplomacy",
      value: 2,
    },
    political: {
      name: "Political",
      value: 3,
    },
    logistics: {
      name: "Logistics",
      value: 4,
    },
    trade: {
      trade: "Trade",
      value: 5,
    },
    warfare: {
      name: "Warfare",
      value: 6,
    },
    technology: {
      name: "Technology",
      value: 7,
    },
    imperial: {
      name: "Imperial",
      value: 8,
    },
  },
  units: {
    warsun: {
      name: "War Sun",
      cost: 12,
      battle: 3,
      move: 2,
      dice: 3,
      bombard: true,
      capacity: 6,
      toughness: 2,
      maxQuantity: 2,
      notes: "Bombardment*, Capacity: 6, Sustain Damage",
      inSpaceCombat: true,
      inGroundCombat: true,
      ignorePds: true,
    },
    dreadnought: {
      name: "Dreadnought",
      cost: 5,
      battle: 5,
      move: 1,
      bombard: true,
      toughness: 2,
      maxQuantity: 5,
      notes: "Bombardment, Sustain Damage",
      inSpaceCombat: true,
      inGroundCombat: true,
    },
    cruiser: {
      name: "Cruiser",
      cost: 2,
      battle: 7,
      move: 2,
      maxQuantity: 8,
      inSpaceCombat: true,
      inGroundCombat: false,
    },
    destroyer: {
      name: "Destroyer",
      cost: 1,
      battle: 9,
      move: 2,
      antifighter: true,
      maxQuantity: 8,
      notes: "Anti-Fighter Barrage",
      inSpaceCombat: true,
      inGroundCombat: false,
    },
    fighter: {
      name: "Fighter",
      cost: 1,
      battle: 9,
      move: 0,
      inSpaceCombat: true,
      inGroundCombat: true,
    },
    carrier: {
      name: "Carrier",
      cost: 3,
      battle: 9,
      move: 1,
      capacity: 6,
      maxQuantity: 4,
      notes: "Capacity: 6",
      inSpaceCombat: true,
      inGroundCombat: false,
    },
    groundForces: {
      name: "Ground Force",
      cost: 1,
      battle: 8,
      move: 0,
      inSpaceCombat: false,
      inGroundCombat: true,
      activeGroundCombatUnit: true,
      planetaryControl: true,
    },
    shockTroops: {
      name: "Shock Troop",
      cost: 1,
      battle: 5,
      move: 0,
      inSpaceCombat: false,
      inGroundCombat: true,
      activeGroundCombatUnit: true,
      planetaryControl: true,
      optionalRule: "shock_troops",
    },
    pds: {
      name: "PDS",
      cost: 2,
      battle: 6,
      move: 0,
      maxQuantity: 6,
      notes: "Planetary Shield, Space Cannon",
      inSpaceCombat: false,
      inGroundCombat: true,
    },
    dock: {
      name: "Space Dock",
      cost: 4,
      battle: 0,
      move: 0,
      maxQuantity: 3,
      notes: "Produce Units, Fighter Capacity: 3",
      inSpaceCombat: false,
      inGroundCombat: false,
    },
  },
  planets: {
    zeroZeroZero: {
      name: "[0.0.0]",
      resources: 5,
      influence: 0
    },
    arcPrime: {
      name: "Arc Prime",
      resources: 4,
      influence: 0
    },
    arretze: {
      name: "Arretze",
      resources: 2,
      influence: 0
    },
    bereg: {
      name: "Bereg",
      resources: 3,
      influence: 1,
      specialty: "biologic",
    },
    druaa: {
      name: "Druaa",
      resources: 3,
      influence: 1,
    },
    hercant: {
      name: "Hercant",
      resources: 1,
      influence: 1
    },
    jord: {
      name: "Jord",
      resources: 4,
      influence: 2
    },
    kamdorn: {
      name: "Kamdorn",
      resources: 0,
      influence: 1
    },
    lodor: {
      name: "Lodor",
      resources: 3,
      influence: 1,
      specialty: "biologic",
    },
    maaluuk: {
      name: "Maaluuk",
      resources: 0,
      influence: 2
    },
    mollPrimus: {
      name: "Moll Primus",
      resources: 4,
      influence: 1
    },
    lirtaIv: {
      name: "Lirta IV",
      resources: 2,
      influence: 3
    },
    tibah: {
      name: "Tibah",
      resources: 1,
      influence: 1
    },
    wrenTerra: {
      name: "Wren Terra",
      resources: 2,
      influence: 1
    },
  },
  races: {
    hacan: {
      name: "Emirates of Hacan",
      color: "red"
    },
    letnev: {
      name: "Barony of Letnev",
      color: "green"
    },
    l1z1x: {
      name: "L1z1x Mindnet",
      color: "purple"
    },
    sol: {
      name: "Federation of Sol",
      color: "blue"
    },
    mentak: {
      name: "Mentak Coalition",
      color: "maroon"
    },
    naalu: {
      name: "Naalu Collective",
      color: "grey"
    },
  },
  grid: {
    config: gridConfig,
    hexagons: [
      {
        q: -3,
        r: 0,
        s: 3,
        system: {
          homeOwner: "mentak",
          kind: "SinglePlanetHomeSystem",
          troops: {
            mentak: ["groundForces", "groundForces", "groundForces", "groundForces", "pds", "cruiser", "cruiser", "cruiser", "carrier"],
          },
          planets: {
            mollPrimus: {
              owner: "mentak",
              mentak: ["spaceDock"],
            },
          },
        }
      },
      {
        q: -3,
        r: 1,
        s: 2,
        system: {
          kind: "DoublePlanetSystem",
          troops: { },
          planets: {
            bereg: { },
            lirtaIv: { },
          },
        }
      },
      {
        q: -3,
        r: 2,
        s: 1,
        system: {
          kind: 'SinglePlanetSystem',
          troops: { },
          planets: {
            tibah: { },
          },
        }
      },
      {
        q: -3,
        r: 3,
        s: 0,
        system: {
          homeOwner: "l1z1x",
          kind: "SinglePlanetHomeSystem",
          troops: {
            l1z1x: ["groundForces", "groundForces", "groundForces", "groundForces", "groundForces", "pds", "fighter", "fighter", "fighter", "carrier", "dreadnought"],
          },
          planets: {
            zeroZeroZero: {
              owner: "l1z1x",
              troops: {
                l1z1x: ["spaceDock"],
              },
            },
          },
        }
      },
      {
        q: -2,
        r: -1,
        s: 3,
      },
      {
        q: -2,
        r: 0,
        s: 2,
      },
      {
        q: -2,
        r: 1,
        s: 1,
        system: {
          kind: 'SinglePlanetWormholeSystem',
          troops: { },
          planets: {
            lodor: { },
          },
          wormholes: ['alpha']
        }
      },
      {
        q: -2,
        r: 2,
        s: 0
      },
      {
        q: -2,
        r: 3,
        s: -1,
      },
      {
        q: -1,
        r: -2,
        s: 3
      },
      {
        q: -1,
        r: -1,
        s: 2
      },
      {
        q: -1,
        r: 0,
        s: 1
      },
      {
        q: -1,
        r: 1,
        s: 0
      },
      {
        q: -1,
        r: 2,
        s: -1
      },
      {
        q: -1,
        r: 3,
        s: -2
      },
      {
        q: 0,
        r: -3,
        s: 3,
        system: {
          homeOwner: "hacan",
          kind: "TriplePlanetHomeSystem",
          troops: {
            hacan: ["groundForces", "groundForces", "groundForces", "groundForces", "fighter", "fighter", "cruiser", "carrier", "carrier"],
          },
          planets: {
            arretze: {
              owner: "hacan",
              troops: {
                hacan: ["spaceDock"],
              },
            },
            hercant: {
              owner: "hacan",
            },
            kamdorn: {
              owner: "hacan",
            }
          },
        }
      },
      {
        q: 0,
        r: -2,
        s: 2,
        system: {
          kind: "SpecialSystem",
          name: "Asteroid Belt"
        }
      },
      {
        q: 0,
        r: -1,
        s: 1
      },
      {
        q: 0,
        r: 0,
        s: 0
      },
      {
        q: 0,
        r: 1,
        s: -1
      },
      {
        q: 0,
        r: 2,
        s: -2
      },
      {
        q: 0,
        r: 3,
        s: -3,
        system: {
          homeOwner: "sol",
          kind: "SinglePlanetHomeSystem",
          troops: {
            sol: ["groundForces", "groundForces", "groundForces", "groundForces", "groundForces", "destroyer", "carrier", "carrier"],
          },
          planets: {
            jord: {
              owner: "sol",
              troops: {
                sol: ["spaceDock"],
              },
            },
          },
        }
      },
      {
        q: 1,
        r: -3,
        s: 2
      },
      {
        q: 1,
        r: -2,
        s: 1
      },
      {
        q: 1,
        r: -1,
        s: 0
      },
      {
        q: 1,
        r: 0,
        s: -1
      },
      {
        q: 1,
        r: 1,
        s: -2
      },
      {
        q: 1,
        r: 2,
        s: -3
      },
      {
        q: 2,
        r: -3,
        s: 1,
      },
      {
        q: 2,
        r: -2,
        s: 0
      },
      {
        q: 2,
        r: -1,
        s: -1
      },
      {
        q: 2,
        r: 0,
        s: -2
      },
      {
        q: 2,
        r: 1,
        s: -3,
      },
      {
        q: 3,
        r: -3,
        s: 0,
        system: {
          homeOwner: "naalu",
          kind: "DoublePlanetHomeSystem",
          troops: {
            naalu: ["groundForces", "groundForces", "groundForces", "groundForces", "pds", "fighter", "fighter", "fighter", "fighter", "destroyer", "cruiser", "carrier"],
          },
          planets: {
            maaluuk: {
              owner: "naalu",
            },
            druaa: {
              owner: "naalu",
              troops: {
                naalu: ["spaceDock"],
              },
            },
          },
        }
      },
      {
        q: 3,
        r: -2,
        s: -1
      },
      {
        q: 3,
        r: -1,
        s: -2
      },
      {
        q: 3,
        r: 0,
        s: -3,
        system: {
          homeOwner: "letnev",
          kind: "DoublePlanetHomeSystem",
          troops: {
            letnev: ["groundForces", "groundForces", "groundForces", "destroyer", "carrier", "dreadnought"],
          },
          planets: {
            arcPrime: {
              owner: "letnev",
              troops: {
                letnev: ["spaceDock"],
              },
            },
            wrenTerra: {
              owner: "letnev",
            },
          },
        }
      }
    ],
    layout: { width: 150, height: 150, flat: true, spacing: 1.02 },
  },
  systems: [
    {
      wormholes: "\u03b1",
      kind: "EmptySystem",
      game: "BG"
    },
    {
      wormholes: "\u03b2",
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "BG"
    },
    {
      name: "The Xxcha Kingdom",
      game: "BG",
      planets: {
        archonRen: {
          name: "Archon Ren",
          resources: 2,
          influence: 3
        },
        archonTau: {
          name: "Archon Tau",
          resources: 1,
          influence: 1
        }
      }
    },
    {
      name: "The Barony of Letnev",
      game: "BG",
      planets: {
        arcPrime: {
          name: "Arc Prime",
          resources: 4,
          influence: 0
        },
        wrenTerra: {
          name: "Wren Terra",
          resources: 2,
          influence: 1
        }
      }
    },
    {
      name: "The Naalu Collective",
      game: "BG",
      planets: {
        maaluuk: {
          name: "Maaluuk",
          resources: 0,
          influence: 2
        },
        druaa: {
          name: "Druaa",
          resources: 3,
          influence: 1
        }
      }
    },
    {
      name: "The L1z1x Mindnet",
      game: "BG",
      planets: {
        zeroZeroZero: {
          name: "[0.0.0]",
          resources: 5,
          influence: 0
        }
      }
    },
    {
      name: "The Yssaril Tribes",
      game: "BG",
      planets: {
        retillion: {
          name: "Retillion",
          resources: 2,
          influence: 3
        },
        shalloq: {
          name: "Shalloq",
          resources: 1,
          influence: 2
        }
      }
    },
    {
      name: "Federation of Sol",
      game: "BG",
      planets: {
        jord: {
          name: "Jord",
          resources: 4,
          influence: 2
        }
      }
    },
    {
      name: "The Mentak Coalition",
      game: "BG",
      planets: {
        mollPrimus: {
          name: "Moll Primus",
          resources: 4,
          influence: 1
        }
      }
    },
    {
      name: "The Emirates of Hacan",
      game: "BG",
      planets: {
        arretze: {
          name: "Arretze",
          resources: 2,
          influence: 0
        },
        hercant: {
          name: "Hercant",
          resources: 1,
          influence: 1
        },
        kamdorn: {
          name: "Kamdorn",
          resources: 0,
          influence: 1
        }
      }
    },
    {
      name: "Universities of Jol-Nar",
      game: "BG",
      planets: {
        nar: {
          name: "Nar",
          resources: 2,
          influence: 1
        },
        jol: {
          name: "Jol",
          resources: 1,
          influence: 2
        }
      }
    },
    {
      name: "Sardakk N'Orr",
      game: "BG",
      planets: {
        trenLak: {
          name: "Tren'Lak",
          resources: 1,
          influence: 0
        },
        quinarra: {
          name: "Quinarra",
          resources: 3,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        mecatolRex: {
          name: "Mecatol Rex",
          resources: 1,
          influence: 6
        }
      }
    },
    {
      game: "BG",
      planets: {
        bereg: {
          name: "Bereg",
          resources: 3,
          influence: 1,
          specialty: {
            biologic: 1
          }
        },
        lirtaIV: {
          name: "Lirta IV",
          resources: 2,
          influence: 3
        }
      }
    },
    {
      game: "BG",
      planets: {
        centauri: {
          name: "Centauri",
          resources: 1,
          influence: 3,
          specialty: {
            propulsion: 1
          }
        },
        gral: {
          name: "Gral",
          resources: 1,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        qucenN: {
          name: "Qucen'n",
          resources: 1,
          influence: 2,
          specialty: {
            biologic: 1
          }
        },
        rarron: {
          name: "Rarron",
          resources: 0,
          influence: 3
        }
      }
    },
    {
      game: "BG",
      planets: {
        tequRan: {
          name: "Tequ'ran",
          resources: 2,
          influence: 0,
          specialty: {
            military: 1
          }
        },
        torkan: {
          name: "Torkan",
          resources: 0,
          influence: 3,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        newAlbion: {
          name: "New Albion",
          resources: 1,
          influence: 1,
          specialty: {
            biologic: 1
          }
        },
        starpoint: {
          name: "Starpoint",
          resources: 3,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        coorneeq: {
          name: "Coorneeq",
          resources: 1,
          influence: 2,
          specialty: {
            military: 1
          }
        },
        resculon: {
          name: "Resculon",
          resources: 2,
          influence: 0
        }
      }
    },
    {
      game: "BG",
      planets: {
        mellon: {
          name: "Mellon",
          resources: 0,
          influence: 2
        },
        zohbat: {
          name: "Zohbat",
          resources: 3,
          influence: 1,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        lazar: {
          name: "Lazar",
          resources: 1,
          influence: 0
        },
        sakulag: {
          name: "Sakulag",
          resources: 2,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        arnor: {
          name: "Arnor",
          resources: 2,
          influence: 1
        },
        lor: {
          name: "Lor",
          resources: 1,
          influence: 2,
          specialty: {
            military: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        arinam: {
          name: "Arinam",
          resources: 1,
          influence: 2,
          specialty: {
            propulsion: 1
          }
        },
        meer: {
          name: "Meer",
          resources: 0,
          influence: 4
        }
      }
    },
    {
      game: "BG",
      planets: {
        abyz: {
          name: "Abyz",
          resources: 3,
          influence: 0
        },
        fira: {
          name: "Fira",
          resources: 2,
          influence: 0,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        dalBootha: {
          name: "Dal Bootha",
          resources: 0,
          influence: 2,
          specialty: {
            military: 1
          }
        },
        xxehan: {
          name: "Xxehan",
          resources: 1,
          influence: 1,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        saudor: {
          name: "Saudor",
          resources: 2,
          influence: 2
        }
      }
    },
    {
      game: "BG",
      planets: {
        tibah: {
          name: "Tibah",
          resources: 1,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        meharXull: {
          name: "Mehar Xull",
          resources: 1,
          influence: 3,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "BG",
      planets: {
        tarMann: {
          name: "Tar'Mann",
          resources: 1,
          influence: 1
        }
      }
    },
    {
      game: "BG",
      planets: {
        wellon: {
          name: "Wellon",
          resources: 1,
          influence: 2
        }
      }
    },
    {
      game: "BG",
      planets: {
        vefutII: {
          name: "Vefut II",
          resources: 2,
          influence: 0,
          specialty: {
            military: 1
          }
        }
      }
    },
    {
      wormholes: "\u03b1",
      game: "BG",
      planets: {
        lodor: {
          name: "Lodor",
          resources: 3,
          influence: 1,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      wormholes: "\u03b2",
      game: "BG",
      planets: {
        quenn: {
          name: "Quenn",
          resources: 2,
          influence: 1,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      name: "Supernova",
      game: "BG"
    },
    {
      name: "Nebula",
      game: "BG"
    },
    {
      name: "Asteroid Field",
      game: "BG"
    },
    {
      name: "Asteroid Field",
      game: "BG"
    },
    {
      kind: "EmptySystem",
      game: "SE"
    },
    {
      kind: "EmptySystem",
      game: "SE"
    },
    {
      kind: "EmptySystem",
      game: "SE"
    },
    {
      kind: "EmptySystem",
      game: "SE"
    },
    {
      name: "The Clan of Saar",
      game: "SE",
      planets: {
        lisisII: {
          name: "Lisis II",
          resources: 1,
          influence: 0
        },
        ragh: {
          name: "Ragh",
          resources: 2,
          influence: 1
        }
      }
    },
    {
      name: "The Brotherhood of Yin",
      game: "SE",
      planets: {
        darien: {
          name: "Darien",
          resources: 2,
          influence: 4
        }
      }
    },
    {
      name: "Embers of Muaat",
      game: "SE",
      planets: {
        muaat: {
          name: "Muaat",
          resources: 4,
          influence: 1
        }
      }
    },
    {
      name: "The Winnu",
      game: "SE",
      planets: {
        winnu: {
          name: "Winnu",
          resources: 3,
          influence: 4
        }
      }
    },
    {
      game: "SE",
      planets: {
        lesab: {
          name: "Lesab",
          resources: 2,
          influence: 1,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      game: "SE",
      planets: {
        elNath: {
          name: "El'Nath",
          resources: 2,
          influence: 0,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "SE",
      planets: {
        perimeter: {
          name: "Perimeter",
          resources: 2,
          influence: 2
        }
      }
    },
    {
      game: "SE",
      planets: {
        lisis: {
          name: "Lisis",
          resources: 2,
          influence: 2
        },
        velnor: {
          name: "Velnor",
          resources: 2,
          influence: 0,
          specialty: {
            military: 1
          }
        }
      }
    },
    {
      refresh: "fighter",
      game: "SE",
      planets: {
        mirage: {
          name: "Mirage",
          resources: 1,
          influence: 2
        }
      }
    },
    {
      game: "SE",
      planets: {
        rigelI: {
          name: "Rigel I",
          resources: 0,
          influence: 1,
          specialty: {
            biologic: 1
          }
        },
        rigelII: {
          name: "Rigel II",
          resources: 1,
          influence: 2
        },
        rigelIII: {
          name: "Rigel III",
          resources: 1,
          influence: 1,
          specialty: {
            propulsion: 1
          }
        }
      }
    },
    {
      game: "SE",
      planets: {
        ashtroth: {
          name: "Ashtroth",
          resources: 2,
          influence: 0
        },
        loki: {
          name: "Loki",
          resources: 1,
          influence: 2
        },
        abaddon: {
          name: "Abaddon",
          resources: 1,
          influence: 0,
          specialty: {
            military: 1
          }
        }
      }
    },
    {
      refresh: "groundForces",
      game: "SE",
      planets: {
        primor: {
          name: "Primor",
          resources: 2,
          influence: 1
        }
      }
    },
    {
      game: "SE",
      planets: {
        capha: {
          name: "Capha",
          resources: 3,
          influence: 0
        }
      }
    },
    {
      refresh: "shockTroops",
      game: "SE",
      planets: {
        hopesEnd: {
          name: "Hope's End",
          resources: 3,
          influence: 0
        }
      }
    },
    {
      game: "SE",
      planets: {
        vegaMinor: {
          name: "Vega Minor",
          resources: 1,
          influence: 2,
          specialty: {
            propulsion: 1
          }
        },
        vegaMajor: {
          name: "Vega Major",
          resources: 2,
          influence: 1
        }
      }
    },
    {
      game: "SE",
      planets: {
        garbozia: {
          name: "Garbozia",
          resources: 2,
          influence: 1,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      game: "SE",
      planets: {
        bellatrix: {
          name: "Bellatrix",
          resources: 0,
          influence: 1,
          specialty: {
            military: 1
          }
        }
      }
    },
    {
      game: "SE",
      planets: {
        arcturus: {
          name: "Arcturus",
          resources: 1,
          influence: 1
        }
      }
    },
    {
      name: "Asteroid Field",
      game: "SE"
    },
    {
      name: "Supernova",
      game: "SE"
    },
    {
      name: "Nebula",
      game: "SE"
    },
    {
      wormholes: "\u03b1 and \u03b2",
      name: "Wormhole Nexus",
      game: "SE",
      planets: {
        malice: {
          name: "Malice",
          resources: 0,
          influence: 3
        }
      }
    },
    {
      name: "Ion Storm",
      game: "SE"
    },
    {
      name: "Ion Storm",
      game: "SE"
    },
    {
      kind: "EmptySystem",
      game: "SotT"
    },
    {
      kind: "EmptySystem",
      game: "SotT"
    },
    {
      wormholes: "\u03b4",
      name: "Ghosts of Creuss",
      game: "SotT",
      planets: {
        creuss: {
          name: "Creuss",
          resources: 4,
          influence: 2
        }
      }
    },
    {
      name: "The Lazax",
      game: "SotT",
      planets: {
        mecatolRex: {
          name: "Mecatol Rex",
          resources: 3,
          influence: 6
        }
      }
    },
    {
      name: "The Nekro Virus",
      game: "SotT",
      planets: {
        mordaiII: {
          name: "Mordai II",
          resources: 4,
          influence: 0
        }
      }
    },
    {
      name: "The Arborec",
      game: "SotT",
      planets: {
        nestphar: {
          name: "Nestphar",
          resources: 3,
          influence: 2,
          specialty: {
            biologic: 1
          }
        }
      }
    },
    {
      wormholes: "\u03b4",
      name: "The Creuss Gate",
      game: "SotT"
    },
    {
      game: "SotT",
      planets: {
        hercalor: {
          name: "Hercalor",
          resources: 1,
          influence: 0
        },
        tiamat: {
          name: "Tiamat",
          resources: 1,
          influence: 2
        }
      }
    },
    {
      game: "SotT",
      planets: {
        tempesta: {
          name: "Tempesta",
          resources: 1,
          influence: 1,
          specialty: {
            propulsion: 2
          }
        }
      }
    },
    {
      game: "SotT",
      planets: {
        semLore: {
          name: "Sem-Lore",
          resources: 3,
          influence: 2
        }
      }
    },
    {
      game: "SotT",
      planets: {
        industrex: {
          name: "Industrex",
          resources: 2,
          influence: 0,
          specialty: {
            military: 2
          }
        }
      }
    },
    {
      game: "SotT",
      planets: {
        faunus: {
          name: "Faunus",
          resources: 1,
          influence: 3,
          specialty: {
            biologic: 2
          }
        }
      }
    },
    {
      name: "Asteroid Field",
      game: "SotT"
    },
    {
      name: "Gravity Rift",
      game: "SotT"
    },
    {
      name: "Nebula",
      game: "SotT",
      planets: {
        everra: {
          name: "Everra",
          resources: 3,
          influence: 1
        }
      }
    },
    {
      name: "Supernova",
      game: "SotT"
    },
    {
      name: "Gravity Rift",
      game: "SotT",
      planets: {
        cormund: {
          name: "Cormund",
          resources: 2,
          influence: 0
        }
      }
    }
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { title: action.payload }
      break;
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  reducer,
  routing
})
