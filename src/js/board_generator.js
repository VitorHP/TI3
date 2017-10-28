
class BoardGenerator {
  constructor(){
    this.gridConfig = {
      width: 800,
      height: 800,
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 3 ]
    }
    this.layout = {
      width: 150,
      height: 150,
      flat: true,
      spacing: 1.02
    }
    this.grid = [
      {
        q: -3,
        r: 0,
        s: 3,
      },
      {
        q: -3,
        r: 1,
        s: 2,
        system: "DoublePlanetSystem",
      },
      {
        q: -3,
        r: 2,
        s: 1,
        system: "SinglePlanetSystem",
      },
      {
        q: -3,
        r: 3,
        s: 0,
      },
      {
        q: -2,
        r: -1,
        s: 3,
        system: "SinglePlanetSystem",
      },
      {
        q: -2,
        r: 0,
        s: 2,
        system: "SpecialSystem",
      },
      {
        q: -2,
        r: 1,
        s: 1,
      },
      {
        q: -2,
        r: 2,
        s: 0,
        system: "SpecialSystem",
      },
      {
        q: -2,
        r: 3,
        s: -1,
        system: "DoublePlanetSystem",
      },
      {
        q: -1,
        r: -2,
        s: 3,
        system: "DoublePlanetSystem",
      },
      {
        q: -1,
        r: -1,
        s: 2,
        system: "EmptySystem",
      },
      {
        q: -1,
        r: 0,
        s: 1,
        system: "EmptySystem",
      },
      {
        q: -1,
        r: 1,
        s: 0,
        system: "DoublePlanetSystem",
      },
      {
        q: -1,
        r: 2,
        s: -1,
        system: "EmptySystem",
      },
      {
        q: -1,
        r: 3,
        s: -2,
        system: "SinglePlanetSystem",
      },
      {
        q: 0,
        r: -3,
        s: 3,
      },
      {
        q: 0,
        r: -2,
        s: 2,
        system: "SpecialSystem",
      },
      {
        q: 0,
        r: -1,
        s: 1,
        system: "DoublePlanetSystem",
      },
      {
        q: 0,
        r: 0,
        s: 0,
      },
      {
        q: 0,
        r: 1,
        s: -1
      },
      {
        q: 0,
        r: 2,
        s: -2,
        system: "SpecialSystem",
      },
      {
        q: 0,
        r: 3,
        s: -3,
      },
      {
        q: 1,
        r: -3,
        s: 2,
      },
      {
        q: 1,
        r: -2,
        s: 1
      },
      {
        q: 1,
        r: -1,
        s: 0,
      },
      {
        q: 1,
        r: 0,
        s: -1,
        system: "DoublePlanetSystem",
      },
      {
        q: 1,
        r: 1,
        s: -2,
      },
      {
        q: 1,
        r: 2,
        s: -3,
        system: "DoublePlanetSystem",
      },
      {
        q: 2,
        r: -3,
        s: 1,
        system: "DoublePlanetSystem",
      },
      {
        q: 2,
        r: -2,
        s: 0,
        system: "SpecialSystem",
      },
      {
        q: 2,
        r: -1,
        s: -1,
        system: "EmptySystem",
      },
      {
        q: 2,
        r: 0,
        s: -2,
        system: "SpecialSystem",
      },
      {
        q: 2,
        r: 1,
        s: -3,
        system: "SinglePlanetSystem",
      },
      {
        q: 3,
        r: -3,
        s: 0,
      },
      {
        q: 3,
        r: -2,
        s: -1,
        system: "SinglePlanetSystem",
      },
      {
        q: 3,
        r: -1,
        s: -2,
        system: "DoublePlanetSystem",
      },
      {
        q: 3,
        r: 0,
        s: -3,
      },
    ];

    this.systems = [
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "TriplePlanetHomeSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetWormholeSystem",
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
        kind: "SinglePlanetWormholeSystem",
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
        kind: "SpecialSystem",
        game: "BG"
      },
      {
        name: "Nebula",
        kind: "SpecialSystem",
        game: "BG"
      },
      {
        name: "Asteroid Field",
        kind: "SpecialSystem",
        game: "BG"
      },
      {
        name: "Asteroid Field",
        kind: "SpecialSystem",
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
        kind: "DoublePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "SinglePlanetHomeSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "TriplePlanetSystem",
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
        kind: "TriplePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
        kind: "DoublePlanetSystem",
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
        kind: "SinglePlanetSystem",
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
    ]
  }

  build() {
    const systemsByKind = this.systems.reduce((acc, system) => {
      if (acc[system.kind] === undefined) {
        acc[system.kind] = [system];
      } else {
        acc[system.kind].push(system);
      }

      return acc;
    }, {})

    return {
      config: this.gridConfig,
      hexagons: this.grid.map((hex) => {
        if (hex.system !== undefined) {
          hex.system = systemsByKind[hex.system].pop();
        }

        return hex;
      }),
      layout: this.layout
    }
  }
}

export default BoardGenerator;
