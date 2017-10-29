import { CHANGE_TITLE } from '../constants';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as stateMachine } from '../ducks/state_machine';

import BoardGenerator from '../board_generator';

const boardGenerator = new BoardGenerator();

let initialState = {
  ui: {
    raceSheets: {
      hacan: {
        expanded: true,
      },
    }
  },
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
  colors: [
    "red", "green", "purple", "blue", "maroon", "grey"
  ],
  races: {
    hacan: {
      name: "Emirados de Hacan",
      slug: 'hacan',
      startingTechnologies: ['enviroCompensator', 'sarweenTools'],
      startingUnits: ['groundForces', 'groundForces', 'groundForces', 'groundForces', 'carrier', 'carrier', 'cruiser', 'fighter', 'fighter', 'dock'],
      specialAbilities: [
        'Suas Negociações não requerem aprovação durante Negociações de Comércio.',
        'Você não precisa gastar um Marcador de Comando para executar a habilidade secundária da Estratégia de Comércio. Quando você recebe Mercadorias através de seus Acordos Comerciais, você recebe uma Mercadoria extra.',
        'Nenhum jogador pode, nunca, exceto por guerra, quebrar um Acordo Comercial com você',
        'Durante a Fase de Status você pode trocar Cartas de Ação com outros jogadores'
      ],
    },
    letnev: {
      name: "Barony of Letnev",
      startingTechnologies: [],
      startingUnits: [],
      specialAbilities: [],
    },
    l1z1x: {
      name: "L1z1x Mindnet",
      startingTechnologies: [],
      startingUnits: [],
      specialAbilities: [],
    },
    sol: {
      name: "Federation of Sol",
      startingTechnologies: [],
      startingUnits: [],
      specialAbilities: [],
    },
    mentak: {
      name: "Mentak Coalition",
      startingTechnologies: [],
      startingUnits: [],
      specialAbilities: [],
    },
    naalu: {
      name: "Naalu Collective",
      startingTechnologies: [],
      startingUnits: [],
      specialAbilities: [],
    },
  },
  grid: boardGenerator.build(),
  technologies: {
    advancedFighters: {
      andor: "and",
      color: "blue",
      description: "Your Fighters receive +1 to all combat rolls. Also, they no longer need the support of a Carrier or Space Dock and may move independently with a movement rate of 2. Fighters in excess of a sytem's normal capacity will count towards your Fleet Supply limit.",
      modifiers: [
        {
          id: "tech-advanced-fighters",
          modify: {
            battle: "+1"
          },
          scope: "combat",
          unitRequires: {
            id: "fighter"
          }
        }
      ],
      name: "Advanced Fighters",
      prerequisites: [
        "typeIvDrive"
      ]
    },
    antimassDeflectors: {
      andor: "and",
      color: "blue",
      description: "Your ships may pass through, but not stop in, Asteroid Fields.",
      modifiers: [

      ],
      name: "Antimass Deflectors",
      prerequisites: [

      ]
    },
    assaultCannon: {
      andor: "and",
      color: "red",
      description: "Dreadnoughts get one free shot before any Space Battle begins. Casualties are removed immediately with no return fire.",
      modifiers: [
        {
          duration: 1,
          id: "tech-assault-cannon",
          round: 0,
          scope: "space",
          special: "TBD",
          unitRequires: {
            id: "dreadnought"
          }
        }
      ],
      name: "Assault Cannon",
      plumbing: {
        anchorsIn: {
          cybernetics: "Left"
        },
        stub: [
          221,
          10
        ]
      },
      prerequisites: [
        "cybernetics",
        "automatedDefenseTurrets"
      ]
    },
    automatedDefenseTurrets: {
      andor: "and",
      color: "red",
      description: "During all Anti-Fighter Barrage rolls Destroyers receive +2 and an additional die.",
      expansion: "se",
      modifiers: [
        {
          duration: 1,
          id: "tech-defense-turrets",
          modify: {
            battle: "+2",
            dice: "+1"
          },
          round: 0,
          scope: "space",
          summary: "Destroyers, extra die and +2",
          unitRequires: {
            id: "destroyer"
          }
        }
      ],
      name: "Automated Defense Turrets",
      plumbing: {
        anchorsOut: {
          assaultCannon: "Left"
        },
        stub: [
          155,
          10
        ]
      },
      prerequisites: [
        "hylarVAssaultLaser"
      ]
    },
    cybernetics: {
      andor: "or",
      color: "green",
      description: "Fighters receive +1 on all combat rolls.",
      modifiers: [
        {
          id: "tech-cybernetics",
          modify: {
            battle: "+1"
          },
          scope: "combat",
          summary: "Fighters always +1",
          unitRequires: {
            id: "fighter"
          }
        }
      ],
      name: "Cybernetics",
      plumbing: {
        anchorsIn: {
          stasisCapsules: "Left"
        },
        "stub": [
          84,
          5
        ]
      },
      prerequisites: [
        "stasisCapsules",
        "antimassDeflectors"
      ]
    },
    dacxiveAnimators: {
      "andor": "and",
      "color": "green",
      "description": "If you win an Invasion Combat, roll one die for every Ground Force unit killed (yours and your opponent's). Every roll of 6+ gains you one free Ground Force to be placed on that planet.",
      "modifiers": [

      ],
      "name": "Dacxive Animators",
      "plumbing": {
        "stub": [
          10,
          20
        ]
      },
      "prerequisites": [
        "neuralMotivator"
      ]
    },
    deepSpaceCannon: {
      "andor": "and",
      "color": "red",
      "description": "Enemy fleets in adjacent systems are now in range of your PDS.",
      "modifiers": [

      ],
      "name": "Deep Space Cannon",
      "plumbing": {
        "anchorsOut": {
          "war-sun": "Right"
        },
        "stub": [
          5,
          30
        ]
      },
      "prerequisites": [
        "hylarVAssaultLaser"
      ]
    },
    enviroCompensator: {
      "andor": "and",
      "color": "yellow",
      "description": "Production capacity of your Space Docks is increased by 1.",
      "modifiers": [

      ],
      "name": "Enviro Compensator",
      "prerequisites": [

      ]
    },
    fleetLogistics: {
      "andor": "and",
      "color": "blue",
      "description": "When taking a Tactical Action, you may now take 2 Tactical Actions, one after the other, before your turn ends.",
      "modifiers": [

      ],
      "name": "Fleet Logistics",
      "prerequisites": [
        "gravitonNegator"
      ]
    },
    genSynthesis: {
      "andor": "and",
      "color": "green",
      "description": "All of your Ground Forces receive +1 during Invasion Combat. When destroyed, roll one die. On a result of 5+ return the unit to your Home System.",
      "modifiers": [
        {
          "id": "tech-gen-synthesis",
          "modify": {
            "battle": "+1"
          },
          "scope": "ground",
          "summary": "Ground Forces +1",
          "unitRequires": {
            "id": [
              "ground",
              "shock"
            ]
          }
        }
      ],
      "name": "Gen Synthesis",
      "plumbing": {
        "stub": [
          30,
          10
        ]
      },
      "prerequisites": [
        "cybernetics"
      ]
    },
    gravitonLaserSystem: {
      "andor": "and",
      "color": "yellow",
      "description": "PDS get one re-roll for each missed combat roll.",
      "modifiers": [
        {
          "id": "tech-graviton-laser",
          "modify": {
            "rerolls": 1
          },
          "scope": "combat",
          "summary": "PDS get a re-roll on misses",
          "unitRequires": {
            "id": "pds"
          }
        }
      ],
      "name": "Graviton Laser System",
      "plumbing": {
        "anchorsIn": {
          "deep-space-cannon": "Right"
        }
      },
      "prerequisites": [
        "deepSpaceCannon"
      ]
    },
    gravitonNegator: {
      "andor": "or",
      "color": "red",
      "description": "Dreadnoughts may bombard planets containing PDS units. Your Fighters may participate in Invasion Combat. Surviving Fighters return to space after combat and may never establish control of a planet.",
      "modifiers": [
        {
          "duration": 1,
          "id": "tech-graviton-negator-dreadnought",
          "modify": {
            "ignorePds": true
          },
          "round": 0,
          "scope": "ground",
          "unitRequires": {
            "id": "dreadnought"
          }
        },
        {
          "id": "tech-graviton-negator-fighter",
          "modify": {
            "activeGroundCombatUnit": true
          },
          "round": 0,
          "scope": "ground",
          "stance": "attacker",
          "unitRequires": {
            "id": "fighter"
          }
        }
      ],
      "name": "Graviton Negator",
      "plumbing": {
        "anchorsIn": {
          "assault-cannon": "Right"
        }
      },
      "prerequisites": [
        "assaultCannon",
        "dacxiveAnimators"
      ]
    },
    hylarVAssaultLaser: {
      "color": "red",
      "description": "Cruisers and Destroyers receive +1 in all combat rolls.",
      "modifiers": [
        {
          "id": "tech-hylar",
          "modify": {
            "battle": "+1"
          },
          "scope": "combat",
          "summary": "Cruisers, Destroyers always +1",
          "unitRequires": {
            "id": [
              "cruiser",
              "destroyer"
            ]
          }
        }
      ],
      "name": "Hylar V Assault Laser"
    },
    hyperMetabolism: {
      "andor": "and",
      "color": "green",
      "description": "During each Status Phase you gain 1 additional Command Counter. Also, before drawing Action Cards you may discard 1 from your hand to draw 1 additional card.",
      "expansion": "se",
      "modifiers": [

      ],
      "name": "Hyper Metabolism",
      "prerequisites": [
        "gen-synthesis"
      ]
    },
    integratedEconomy: {
      "andor": "and",
      "color": "yellow",
      "description": "When producing units at your Space Docks you may place them in any activated adjacent system that is empty or friendly. You may place PDS and Ground Force units on any friendly planet within this range.",
      "modifiers": [

      ],
      "name": "Integrated Economy",
      "plumbing": {
        "anchorsIn": {
          "cybernetics": "Right"
        }
      },
      "prerequisites": [
        "microTechnology",
        "cybernetics"
      ]
    },
    lightWaveDeflector: {
      "andor": "and",
      "color": "blue",
      "description": "Your ships may move through systems containing enemy ships and continue their movement to the activated system.",
      "modifiers": [

      ],
      "name": "Light\/Wave Deflector",
      "plumbing": {
        "anchorsIn": {
          "xrd-transporters": "Left"
        },
        "stub": [
          195,
          10
        ]
      },
      "prerequisites": [
        "magenDefenseGrid",
        "xrdTransporters"
      ]
    },
    magenDefenseGrid: {
      "andor": "and",
      "color": "red",
      "description": "Your PDS units receive +1 on all combat rolls. Defending Ground Forces with a PDS get +1 on all combat rolls during Invasion Combat.",
      "modifiers": [
        {
          "id": "tech-magen-ground-forces",
          "modify": {
            "battle": "+1"
          },
          "scope": "ground",
          "stance": "defender",
          "summary": "Ground Forces +1 with PDS",
          "supportRequires": {
            "id": "pds"
          },
          "unitRequires": {
            "id": [
              "ground",
              "shock"
            ]
          }
        },
        {
          "id": "tech-magen-pds",
          "modify": {
            "battle": "+1"
          },
          "scope": "combat",
          "summary": "PDS get +1",
          "unitRequires": {
            "id": "pds"
          }
        }
      ],
      "name": "Magen Defense Grid",
      "prerequisites": [
        "deepSpaceCannon"
      ]
    },
    maneuveringJets: {
      "andor": "and",
      "color": "blue",
      "description": "Opponent receives -1 on all PDS rolls targeting your ships (or -2 if firing from an adjacent system). Additionally you receive -1 to all your Space Mine rolls and ships don't have to stop for Ion Storms.",
      "expansion": "se",
      "modifiers": [

      ],
      "name": "Maneuvering Jets",
      "prerequisites": [
        "xrdTransporters"
      ]
    },
    microTechnology: {
      "andor": "or",
      "color": "yellow",
      "description": "When you receive Trade Goods from your Trade Agreements, you now receive +1 Trade Good for each of your active Trade Agreements.",
      "modifiers": [

      ],
      "name": "Micro Technology",
      "plumbing": {
        "anchorsIn": {
          "stasis-capsules": "Right"
        },
        "stub": [
          5,
          20
        ]
      },
      "prerequisites": [
        "sarweenTools",
        "stasisCapsules"
      ]
    },
    nanoTechnology: {
      "andor": "and",
      "color": "yellow",
      "description": "Your Dreadnoughts and War Suns may not be targeted by Action Cards. When you claim a planet, you gain its planet card refreshed.",
      "expansion": "se",
      "modifiers": [

      ],
      "name": "Nano Technology",
      "prerequisites": [
        "microTechnology"
      ]
    },
    neuralMotivator: {
      "andor": "or",
      "color": "green",
      "description": "Draw one extra Action Card during each Status Phase.",
      "modifiers": [

      ],
      "name": "Neural Motivator",
      "plumbing": {
        "anchorsIn": {
          "micro-technology": "Left",
          "stasis-capsules": "Right"
        },
        "stub": [
          40,
          10
        ]
      },
      "prerequisites": [
        "stasisCapsules",
        "microTechnology"
      ]
    },
    sarweenTools: {
      "andor": "and",
      "color": "yellow",
      "description": "Whenever you produce units at any Space Dock, you now receive +1 resource with which to build units.",
      "modifiers": [

      ],
      "name": "Sarween Tools",
      "plumbing": {
        "stub": [
          5,
          16
        ]
      },
      "prerequisites": [
        "enviroCompensator"
      ]
    },
    stasisCapsules: {
      "andor": "and",
      "color": "green",
      "description": "Cruisers and Dreadnoughts can now carry one Ground Force unit.",
      "modifiers": [

      ],
      "name": "Stasis Capsules",
      "plumbing": {
        "anchorsOut": {
          "cybernetics": "Right",
          "micro-technology": "Left",
          "neural-motivator": "Right"
        },
        "stubs": {
          "cybernetics": [
            35,
            10
          ],
          "micro-technology": [
            10,
            35
          ],
          "neural-motivator": [
            81,
            10
          ]
        }
      },
      "prerequisites": [
        "enviroCompensator"
      ]
    },
    transitDiodes: {
      "andor": "and",
      "color": "yellow",
      "description": "As an action you may spend 1 Strategic Command Counter to immediately move up to 4 of your Ground Forces from one planet to any other planet you control.",
      "modifiers": [

      ],
      "name": "Transit Diodes",
      "plumbing": {
        "anchorsIn": {
          "dacxiveAnimators": "Left"
        },
        "stub": [
          71,
          15
        ]
      },
      "prerequisites": [
        "lightWaveDeflector",
        "dacxiveAnimators"
      ]
    },
    typeIvDrive: {
      "andor": "and",
      "color": "blue",
      "description": "Youre Cruisers and Dreadnoughts now receive +1 movement.",
      "modifiers": [

      ],
      "name": "Type IV Drive",
      "plumbing": {
        "anchorsIn": {
          "neural-motivator": "Left"
        },
        "stub": [
          15,
          61
        ]
      },
      "prerequisites": [
        "neuralMotivator",
        "xrdTransporters"
      ]
    },
    warSun: {
      "andor": "and",
      "color": "red",
      "description": "You are now allowed to produce War Sun units.",
      "modifiers": [

      ],
      "name": "War Sun",
      "plumbing": {
        "anchorsIn": {
          "deep-space-cannon": "Right",
          "sarween-tools": "Left"
        }
      },
      "prerequisites": [
        "deepSpaceCannon",
        "sarweenTools"
      ]
    },
    X89BacterialWeapon: {
      "andor": "or",
      "color": "red",
      "description": "Instead of normal bombardment your Dreadnought or War Sun units may now immediately destroy all enemy Ground Forces on the planet. Then discard all of your Action Cards.",
      "modifiers": [

      ],
      "name": "X-89 Bacterial Weapon",
      "plumbing": {
        "anchorsIn": {
          "transitDiodes": "Left"
        }
      },
      "prerequisites": [
        "transitDiodes",
        "assaultCannon"
      ]
    },
    xrdTransporters: {
      "andor": "and",
      "color": "blue",
      "description": "Carriers now receive +1 movement.",
      "modifiers": [

      ],
      "name": "Xrd Transporters",
      "plumbing": {
        "stubs": {
          "light-wave-deflector": [
            213,
            10
          ],
          "maneuvering-jets": [
            49,
            0
          ],
          "type-iv-drive": [
            118,
            100
          ]
        }
      },
      "prerequisites": [
        "antimassDeflectors"
      ]
    }
  }
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
  data: reducer,
  routing,
  stateMachine
})

