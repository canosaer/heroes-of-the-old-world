export const edges = {
  N: [
    {
      name: "Acrobat",
      requirements: {
        attributes: {
          agility: 3,
        },
        skills: {
          athletics: 3,
        }
      },
      summary: "Free reroll on acrobatic Athletics attempts."
    },
    {
      name: "Alertness",
      requirements: {},
      summary: "+2 to Notice rolls."
    },
    {
      name: "Ambidextrous",
      requirements: {
        attributes: {
          agility: 3,
        },
      },
      summary: "Ignore penalty when making Trait rolls with off-hand."
    },
    {
      name: "Animal Tamer",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "Animals like your hero and you start with a pet."
    },
    {
      name: "Arcane Resistance",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "+2 to Trait rolls to resist magical effects; magical damage is reduced by 2."
    },
    {
      name: "Aristocrat",
      requirements: {},
      summary: "+2 to Common Knowledge and networking with the upper class."
    },
    {
      name: "Assassin",
      requirements: {
        attributes: {
          agility: 3,
        },
        skills: {
          fighting: 2,
          stealth: 3,
        }
      },
      summary: "+2 to damage vulnerable or surprised foes."
    },
    {
      name: "Attractive",
      requirements: {
        attributes: {
          vigor: 2,
        },
      },
      summary: "+1 to Performance and Persuasion rolls."
    },
    {
      name: "Berserk",
      requirements: {},
      summary: "After being Shaken or Wounded, Strength and Toughness are increased, ignore one level of Wound penalties, and melee attacks must be Wild Attacks. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll -2."
    },
    {
      name: "Bolster",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "May remove Distracted or Vulnerable state after a Test."
    },
    {
      name: "Brave",
      requirements: {
        attributes: {
          spirit: 2,
        },
      },
      summary: "Improved resistance to fear effects."
    },
    {
      name: "Brawny",
      requirements: {
        attributes: {
          strength: 2,
          vigor: 2,
        },
      },
      summary: "Size and Toughness increased. Improved carrying capacity and decreased Minimum Strength to use weapons, armor, or equipment."
    },
    {
      name: "Brawler",
      requirements: {
        attributes: {
          strength: 3,
          vigor: 3,
        },
      },
      summary: "Toughness +1, increased damage from fists; greater increase if combined with Martial Artist."
    },
    {
      name: "Brute",
      requirements: {
        attributes: {
          strength: 2,
          vigor: 2,
        },
      },
      summary: "Increased throwing Range."
    },
    {
      name: "Calculating",
      requirements: {
        attributes: {
          smarts: 3,
        },
      },
      summary: "When your initiative is 5 or less, ignore up to 2 points of penalties on one action."
    },
    {
      name: "Champion",
      requirements: {
        attributes: {
          spirit: 3,
        },
        skills: {
          fighting: 2,
        }
      },
      summary: "Increased damage vs. supernaturally evil creatures."
    },
    {
      name: "Charismatic",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "Free reroll when using Persuasion."
    },
    {
      name: "Command",
      requirements: {
        attributes: {
          smarts: 2,
        },
      },
      summary: "+1 to allies' Shaken recovery rolls in Command Range."
    },
    {
      name: "Connections",
      requirements: {},
      summary: "Contacts provide aid or other favor."
    },
    {
      name: "Dead Shot",
      requirements: {
        skills: {
          either: {
            athletics: 3,
            shooting: 3,
          },
        }
      },
      summary: "Once per turn, double damage from Athletics (throwing) or Shooting roll when initiative is a critical hit."
    },
    {
      name: "Elan",
      requirements: {
          attributes: {
            spirit: 3,
          },
      },
      summary: "+2 when spending a Luck Point to reroll a Trait roll."
    },
    {
      name: "Extraction",
      requirements: {
          attributes: {
            agility: 3,
          },
      },
      summary: "One adjacent foe doesn't get a free attack when you withdraw from close combat."
    },
    {
      name: "Fame",
      requirements: {},
      summary: "+1 to Persuasion rolls, double usual fee for Performance."
    },
    {
      name: "Fast Healer",
      requirements: {
        attributes: {
          vigor: 3,
        },
      },
      summary: "+2 Vigor when rolling for natural healing; check every 3 days."
    },
    {
      name: "Feint",
      requirements: {
        skills: {
          fighting: 3,
        }
      },
      summary: "You may choose to make foe resist with Smarts instead of Agility during a Fighting Test."
    },
    {
      name: "Filthy Rich",
      requirements: {
        edges: ["Rich",],
      },
      summary: "Character starts with five times the starting gold."
    },
    {
      name: "First Strike",
      requirements: {
        attributes: {
          agility: 3,
        },
    },
      summary: "Free Fighting attack once per round when foe moves within Reach."
    },
    {
      name: "Fleet-Footed",
      requirements: {
        attributes: {
          agility: 2,
        },
      },
      summary: "Pace +2, increase running die one step."
    },
    {
      name: "Free Runner",
      requirements: {
        attributes: {
          agility: 3,
        },
      },
      summary: "Ignore Difficult Ground and add +2 to Athletics in foot chases."
    },
    {
      name: "Great Luck",
      requirements: {
        edges: ["Luck",],
      },
      summary: "+2 maximum Luck."
    },
    {
      name: "Hard to Kill",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "Ignore Wound penalties when making Vigor rolls to avoid Bleeding Out."
    },
    {
      name: "Healer",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "+2 to Healing rolls, magical or otherwise."
    },
    {
      name: "Humiliate",
      requirements: {
        skills: {
          taunt: 3,
        },
      },
      summary: "Free reroll when making Taunt rolls."
    },
    {
      name: "Improved Arcane Resistance",
      requirements: {
        edges: ["Arcane Resistance",],
      },
      summary: "+4 to Trait rolls to resist magical effects; magical damage is reduced by 4."
    },
    {
      name: "Improved Nerves of Steel",
      requirements: {
        edges: ["Nerves of Steel",],
      },
      summary: "Ignore up to two levels of Wound penalties."
    },
    {
      name: "Investigator",
      requirements: {
        attributes: {
          smarts: 3,
        },
        skills: {
          research: 3,
        }
      },
      summary: "+2 to Research and certain types of Notice rolls."
    },
    {
      name: "Iron Jaw",
      requirements: {
        attributes: {
          vigor: 3,
        },
      },
      summary: "+2 to Soak and Vigor rolls to avoid Knockout Blows."
    },
    {
      name: "Jack-of-all-Trades",
      requirements: {
        attributes: {
          smarts: 4,
        },
      },
      summary: "Chance to gain skills through observation or study."
    },
    {
      name: "Linguist",
      requirements: {
        attributes: {
          smarts: 2,
        },
      },
      summary: "Character can learn languages through observation or study."
    },
    {
      name: "Liquid Courage",
      requirements: {
        attributes: {
          smarts: 2,
        },
      },
      summary: "Alcohol increases Vigor and ignores one level of Wound penalty; -1 to Agility, Smarts, and related skills."
    },
    {
      name: "Luck",
      requirements: {},
      summary: "+1 maximum Luck."
    },
    {
      name: "Martial Artist",
      requirements: {
        skills: {
          fighting: 2,
        },
      },
      summary: "Unarmed Fighting +1, fists and feet count as Natural Weapons, add d4 damage die to unarmed Fighting attacks (or increase die a step if you already have it)."
    },
    {
      name: "McGyver",
      requirements: {
        attributes: {
          smarts: 2,
        },
        skills: {
          repair: 2,
          notice: 3,
        }
      },
      summary: "Quickly create improvised devices from scraps."
    },
    {
      name: "Menacing",
      requirements: {
        skills: {
          persuasion: -4,
        }
      },
      summary: "+2 to Intimidation."
    },
    {
      name: "Mighty Blow",
      requirements: {
        skills: {
          fighting: 3,
        },
      },
      summary: "Once per turn, double Fighting damage when initiative is a critical hit."
    },
    {
      name: "Fixer",
      requirements: {
        skills: {
          repair: 3,
        },
      },
      summary: "+2 to Repair rolls, half the time required with a raise."
    },
    {
      name: "Nerves of Steel",
      requirements: {
        attributes: {
          vigor: 3,
        },
      },
      summary: "Ignore one level of Wound penalties."
    },
    {
      name: "Provoke",
      requirements: {
        skills: {
          taunt: 2,
        },
      },
      summary: "May provoke foes with a raise on a Taunt roll."
    },
    {
      name: "Retort",
      requirements: {
        skills: {
          taunt: 2,
        },
      },
      summary: "A raise when resisting a Taunt or Intimidation attack makes the foe Distracted."
    },
    {
      name: "Rich",
      requirements: {},
      summary: "Character starts with three times the starting gold."
    },
    {
      name: "Scavenger",
      requirements: {
        edges: ['Luck',],
      },
      summary: 'More likely to find hidden loot and treasure.'
    },
    {
      name: "Soldier",
      requirements: {
        attributes: {
          strength: 2,
          vigor: 2,
        },
      },
      summary: "Strength is one die type higher for Encumbrance and Min Str. Reroll Vigor rolls when resisting environmental Hazards."
    },
    // {
    //   name: "Steady Hands",
    //   requirements: {
    //     attributes: {
    //       agility: 3,
    //     },
    //   },
    //   summary: "Ignore Unstable Platform penalty; reduce running penalty to -1."
    // },
    {
      name: "Streetwise",
      requirements: {
        attributes: {
          smarts: 2,
        },
      },
      summary: "+2 to Common Knowledge and criminal networking."
    },
    {
      name: "Strong Willed",
      requirements: {
        attributes: {
          spirit: 3,
        },
      },
      summary: "+2 to resist Smarts or Spirit-based Tests."
    },
    {
      name: "Survivalist",
      requirements: {
        attributes: {
          spirit: 2,
        },
        skills: {
          survival: 3,
        }
      },
      summary: "+2 to Survival and Stealth in the wilds."
    },
    {
      name: "Sweep",
      requirements: {
        attributes: {
          strength: 3,
        },
        skills: {
          fighting: 3,
        }
      },
      summary: "Fighting roll at -2 to hit all targets in weapon's Reach, no more than once per turn."
    },
    {
      name: "Thief",
      requirements: {
        attributes: {
          agility: 3,
        },
        skills: {
          stealth: 2,
          thievery: 2,
        }
      },
      summary: "+1 Thievery, Athletics rolls made to climb, Stealth in urban environments."
    },
    {
      name: "Two-Fisted",
      requirements: {
        attributes: {
          strength: 3,
        },
        skills: {
          fighting: 3,
        }
      },
      summary: "Make one extra Fighting roll with a second melee weapon in the off-hand at no Multi-Action."
    },
    {
      name: "Quick",
      requirements: {
        attributes: {
          smarts: 2,
        },
      },
      summary: "Improved combat initiative."
    },
    {
      name: "Very Attractive",
      requirements: {
        edges: ["Attractive",],
      },
      summary: "+2 to Performance and Persuasion rolls."
    },
  ]
}