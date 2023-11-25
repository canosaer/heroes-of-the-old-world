export const edges = {
  N: [
    {
      name: "Ace",
      requirements: "Ad8",
      summary: "Character may spend Bennies to Soak damage for his vehicle and ignores up to 2 points of penalties."
    },
    {
      name: "Acrobat",
      requirements: "Ad8, Athletics d8",
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
        traits: {
          agility: 8,
        },
      },
      summary: "Ignore –2 penalty when making Trait rolls with off-hand."
    },
    {
      name: "Arcane Background",
      requirements: {},
      summary: "Allows access to the Arcane Backgrounds listed in Chapter Five."
    },
    {
      name: "Arcane Resistance",
      requirements: {
        traits: {
          spirit: 8,
        },
      },
      summary: "+2 to Trait rolls to resist magical effects; magical damage is reduced by 2."
    },
    {
      name: "Improved Arcane Resistance",
      requirements: {
        edges: "Arcane Resistance",
      },
      summary: "+4 to Trait rolls to resist magical effects; magical damage is reduced by 4."
    },
    {
      name: "Aristocrat",
      requirements: {},
      summary: "+2 to Common Knowledge and networking with the upper class."
    },
    {
      name: "Attractive",
      requirements: {
        traits: {
          vigor: 6,
        },
      },
      summary: "+1 to Performance and Persuasion rolls."
    },
    {
      name: "Very Attractive",
      requirements: {
        edges: ["Attractive",],
      },
      summary: "+2 to Performance and Persuasion rolls."
    },
    {
      name: "Berserk",
      requirements: {},
      summary: "After being Shaken or Wounded, melee attacks must be Wild Attacks, +1 die type to Strength, +2 to Toughness, ignore one level of Wound penalties. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll -2."
    },
    {
      name: "Brave",
      requirements: {
        traits: {
          spirit: 6,
        },
      },
      summary: "+2 to Fear checks and -2 to rolls on the Fear Table."
    },
    {
      name: "Brawny",
      requirements: {
        traits: {
          strength: 6,
          vigor: 6,
        },
      },
      summary: "Size (and therefore Toughness) +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength to use weapons, armor, or equipment."
    },
    {
      name: "Brawler",
      requirements: {
        traits: {
          strength: 8,
          vigor: 8,
        },
      },
      summary: "Toughness +1, add d4 to damage from fists; or increase it a die type if combined with Martial Artist, Claws, or similar abilities."
    },
    {
      name: "Brute",
      requirements: {
        traits: {
          strength: 6,
          vigor: 6,
        },
      },
      summary: "Link Athletics to Strength instead of Agility (including resistance). Short Range of any thrown item increased by +1. Double that for the adjusted Medium Range, and double again for Long Range."
    },
    {
      name: "Calculating",
      requirements: {
        traits: {
          smarts: 8,
        },
      },
      summary: "Ignore up to 2 points of penalties on one action with an Action Card of Five or less."
    },
    {
      name: "Charismatic",
      requirements: {
        traits: {
          spirit: 8,
        },
      },
      summary: "Free reroll when using Persuasion."
    },
    {
      name: "Dead Shot",
      requirements: {
        traits: {
          skills: {
            either: {
              athletics: 8,
              shooting: 8,
            },
          }
        },
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
          traits: {
            spirit: 8,
          },
      },
      summary: "+2 when spending a Benny to reroll a Trait roll."
    },
    {
      name: "Extraction",
      requirements: {
          traits: {
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
        traits: {
          vigor: 8,
        },
      },
      summary: "+2 Vigor when rolling for natural healing; check every 3 days."
    },
    {
      name: "Feint",
      requirements: {
          traits: {
            skills: {
              fighting: 8,
            }
          },
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
        traits: {
          agility: 8,
        },
    },
      summary: "Free Fighting attack once per round when foe moves within Reach."
    },
    {
      name: "Fleet-Footed",
      requirements: {
        traits: {
          agility: 6,
        },
      },
      summary: "Pace +2, increase running die one step."
    },
    {
      name: "Great Luck",
      requirements: {
        edges: ["Luck",],
      },
      summary: "+2 Bennies at the start of each session."
    },
    {
      name: "Linguist",
      requirements: {
        Smarts: 6,
      },
      summary: "Character has d6 in languages equal to half her Smarts die."
    },
    {
      name: "Luck",
      requirements: {},
      summary: "+1 Benny at the start of each session."
    },
    {
      name: "Rich",
      requirements: {},
      summary: "Character starts with three times the starting gold."
    },
    {
      name: "Quick",
      requirements: {
        traits: {
          agility: 8,
        },
      },
      summary: "The hero may discard and redraw Action Cards of 5 or lower."
    },
  ]
}