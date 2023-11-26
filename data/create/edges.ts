export const edges = {
  N: [
    {
      name: "Acrobat",
      requirements: {
        attributes: {
          agility: 8,
        },
        skills: {
          athletics: 8,
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
          agility: 8,
        },
      },
      summary: "Ignore -2 penalty when making Trait rolls with off-hand."
    },
    {
      name: "Animal Tamer",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "Animals like your hero and he has a pet of some sort."
    },
    {
      name: "Arcane Background",
      requirements: {},
      summary: "Allows access to the Arcane Backgrounds listed in Chapter Five."
    },
    {
      name: "Arcane Resistance",
      requirements: {
        attributes: {
          spirit: 8,
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
          agility: 8,
        },
        skills: {
          fighting: 6,
          stealth: 8,
        }
      },
      summary: "+2 to damage foes when Vulnerable or assassin has The Drop."
    },
    {
      name: "Attractive",
      requirements: {
        attributes: {
          vigor: 6,
        },
      },
      summary: "+1 to Performance and Persuasion rolls."
    },
    {
      name: "Beast Bond",
      requirements: {},
      summary: "The hero may spend Bennies for animals under her control."
    },
    {
      name: "Berserk",
      requirements: {},
      summary: "After being Shaken or Wounded, melee attacks must be Wild Attacks, +1 die type to Strength, +2 to Toughness, ignore one level of Wound penalties. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll -2."
    },
    {
      name: "Bolster",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "May remove Distracted or Vulnerable state after a Test."
    },
    {
      name: "Brave",
      requirements: {
        attributes: {
          spirit: 6,
        },
      },
      summary: "+2 to Fear checks and -2 to rolls on the Fear Table."
    },
    {
      name: "Brawny",
      requirements: {
        attributes: {
          strength: 6,
          vigor: 6,
        },
      },
      summary: "Size (and therefore Toughness) +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength to use weapons, armor, or equipment."
    },
    {
      name: "Brawler",
      requirements: {
        attributes: {
          strength: 8,
          vigor: 8,
        },
      },
      summary: "Toughness +1, add d4 to damage from fists; or increase it a die type if combined with Martial Artist, Claws, or similar abilities."
    },
    {
      name: "Brute",
      requirements: {
        attributes: {
          strength: 6,
          vigor: 6,
        },
      },
      summary: "Link Athletics to Strength instead of Agility (including resistance). Short Range of any thrown item increased by +1. Double that for the adjusted Medium Range, and double again for Long Range."
    },
    {
      name: "Calculating",
      requirements: {
        attributes: {
          smarts: 8,
        },
      },
      summary: "Ignore up to 2 points of penalties on one action with an Action Card of Five or less."
    },
    {
      name: "Champion",
      requirements: {
        attributes: {
          spirit: 8,
        },
        skills: {
          fighting: 6,
        }
      },
      summary: "+2 damage vs. supernaturally evil creatures."
    },
    {
      name: "Charismatic",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "Free reroll when using Persuasion."
    },
    {
      name: "Command",
      requirements: {
        attributes: {
          smarts: 6,
        },
      },
      summary: "+1 to Extras' Shaken recovery rolls in Command Range."
    },
    {
      name: "Common Bond",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "The hero may freely give her Bennies to others."
    },
    {
      name: "Connections",
      requirements: {},
      summary: "Contacts provide aid or other favor."
    },
    {
      name: "Danger Sense",
      requirements: {},
      summary: "Notice roll at +2 to sense ambushes or similar events."
    },
    {
      name: "Dead Shot",
      requirements: {
        skills: {
          either: {
            athletics: 8,
            shooting: 8,
          },
        }
      },
      summary: "Once per turn, double damage from Athletics (throwing) or Shooting roll when dealt a Joker."
    },
    {
      name: "Double Tap",
      requirements: "Shooting d6",
      summary: "+1 to hit and damage when firing no more than RoF 1 per action."
    },
    {
      name: "Elan",
      requirements: {
          attributes: {
            spirit: 8,
          },
      },
      summary: "+2 when spending a Benny to reroll a Trait roll."
    },
    {
      name: "Extraction",
      requirements: {
          attributes: {
            agility: 8,
          },
      },
      summary: "One adjacent foe doesn't get a free attack when you withdraw from close combat."
    },
    {
      name: "Fame",
      requirements: {},
      summary: "+1 Persuasion rolls when recognized (Common Knowledge), double usual fee for Performance."
    },
    {
      name: "Famous",
      requirements: {
        edges: ["Fame",],
      },
      summary: "+2 Persuasion when recognized, 5x or more usual fee for Performance."
    },
    {
      name: "Fast Healer",
      requirements: {
        attributes: {
          vigor: 8,
        },
      },
      summary: "+2 Vigor when rolling for natural healing; check every 3 days."
    },
    {
      name: "Feint",
      requirements: {
        skills: {
          fighting: 8,
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
          agility: 8,
        },
    },
      summary: "Free Fighting attack once per round when foe moves within Reach."
    },
    {
      name: "Fleet-Footed",
      requirements: {
        attributes: {
          agility: 6,
        },
      },
      summary: "Pace +2, increase running die one step."
    },
    {
      name: "Free Runner",
      requirements: {
        attributes: {
          agility: 8,
        },
      },
      summary: "Ignore Difficult Ground and add +2 to Athletics in foot chases."
    },
    {
      name: "Great Luck",
      requirements: {
        edges: ["Luck",],
      },
      summary: "+2 Bennies at the start of each session."
    },
    {
      name: "Hard to Kill",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "Ignore Wound penalties when making Vigor rolls to avoid Bleeding Out."
    },
    {
      name: "Healer",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "+2 to Healing rolls, magical or otherwise."
    },
    {
      name: "Humiliate",
      requirements: {
        skills: {
          taunt: 8,
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
          smarts: 8,
        },
        skills: {
          research: 8,
        }
      },
      summary: "+2 to Research and certain types of Notice rolls."
    },
    {
      name: "Iron Jaw",
      requirements: {
        attributes: {
          vigor: 8,
        },
      },
      summary: "+2 to Soak and Vigor rolls to avoid Knockout Blows."
    },
    {
      name: "Iron Will",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "+2 to resisting and recovery from magic."
    },
    {
      name: "Jack-of-all-Trades",
      requirements: {
        attributes: {
          smarts: 10,
        },
      },
      summary: "Gain d4 in a skill (or d6 with a raise) until replaced."
    },
    {
      name: "Linguist",
      requirements: {
        attributes: {
          smarts: 6,
        },
      },
      summary: "Character has d6 in languages equal to half her Smarts die."
    },
    {
      name: "Liquid Courage",
      requirements: {
        attributes: {
          smarts: 6,
        },
      },
      summary: "Alcohol increases Vigor and ignores one level of Wound penalty; -1 to Agility, Smarts, and related skills."
    },
    {
      name: "Luck",
      requirements: {},
      summary: "+1 Benny at the start of each session."
    },
    {
      name: "Martial Artist",
      requirements: {
        skills: {
          fighting: 6,
        },
      },
      summary: "Unarmed Fighting +1, fists and feet count as Natural Weapons, add d4 damage die to unarmed Fighting attacks (or increase die a step if you already have it)."
    },
    {
      name: "McGyver",
      requirements: {
        attributes: {
          smarts: 6,
        },
        skills: {
          repair: 6,
          notice: 8,
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
          fighting: 8,
        },
      },
      summary: "Once per turn, double Fighting damage when dealt a Joker."
    },
    {
      name: "Mr. Fix It",
      requirements: {
        skills: {
          repair: 8,
        },
      },
      summary: "+2 to Repair rolls, half the time required with a raise."
    },
    {
      name: "Nerves of Steel",
      requirements: {
        attributes: {
          vigor: 8,
        },
      },
      summary: "Ignore one level of Wound penalties."
    },
    {
      name: "Provoke",
      requirements: {
        skills: {
          taunt: 6,
        },
      },
      summary: "May “provoke” foes with a raise on a Taunt roll."
    },
    {
      name: "Reliable",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "Free reroll when making Support rolls."
    },
    {
      name: "Retort",
      requirements: {
        skills: {
          taunt: 6,
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
      name: "Scholar",
      requirements: {
        attributes: {
          agility: 8,
        },
      },
      summary: '+2 to any one “knowledge” skill.'
    },
    {
      name: "Soldier",
      requirements: {
        attributes: {
          strength: 6,
          vigor: 6,
        },
      },
      summary: "Strength is one die type higher for Encumbrance and Min Str. Reroll Vigor rolls when resisting environmental Hazards."
    },
    {
      name: "Steady Hands",
      requirements: {
        attributes: {
          agility: 8,
        },
      },
      summary: "Ignore Unstable Platform penalty; reduce running penalty to -1."
    },
    {
      name: "Streetwise",
      requirements: {
        attributes: {
          smarts: 6,
        },
      },
      summary: "+2 to Common Knowledge and criminal networking."
    },
    {
      name: "Strong Willed",
      requirements: {
        attributes: {
          spirit: 8,
        },
      },
      summary: "+2 to resist Smarts or Spirit-based Tests."
    },
    {
      name: "Sweep",
      requirements: {
        attributes: {
          strength: 8,
        },
        skills: {
          fighting: 8,
        }
      },
      summary: "Fighting roll at -2 to hit all targets in weapon's Reach, no more than once per turn."
    },
    {
      name: "Thief",
      requirements: {
        attributes: {
          agility: 8,
        },
        skills: {
          stealth: 6,
          thievery: 6,
        }
      },
      summary: "+1 Thievery, Athletics rolls made to climb, Stealth in urban environments."
    },
    {
      name: "Two-Fisted",
      requirements: {
        attributes: {
          strength: 8,
        },
        skills: {
          fighting: 8,
        }
      },
      summary: "Make one extra Fighting roll with a second melee weapon in the off-hand at no Multi-Action."
    },
    {
      name: "Quick",
      requirements: {
        attributes: {
          smarts: 6,
        },
      },
      summary: "The hero may discard and redraw Action Cards of 5 or lower."
    },
    {
      name: "Very Attractive",
      requirements: {
        edges: ["Attractive",],
      },
      summary: "+2 to Performance and Persuasion rolls."
    },
    {
      name: "Woodsman",
      requirements: {
        attributes: {
          spirit: 6,
        },
        skills: {
          survival: 8,
        }
      },
      summary: "+2 to Survival and Stealth in the wilds."
    },
  ]
}