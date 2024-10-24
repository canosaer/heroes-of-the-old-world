export const spells = {
  N: [
    {
      name: "Arcane Protection",
      difficulty: "1",
      range: "x1",
      duration : "Maintain",
      summary: "Enemy casters subtract 2 (4 with a raise) when targeting this character; reduces damage a like amount.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    // {
    //   name: "Beast Friend",
    //   difficulty: "Varies",
    //   range: "x1",
    //   duration : "Concentration",
    //   summary: "Controls animals.",
    //   mods: [
    //     {
    //       name: "Mind Rider",
    //       difficulty: "1",
    //       summary: "The caster can communicate and sense through any of the beasts he's befriended."
    //     },
    //   ],
    // },
    {
      name: "Blind",
      difficulty: "2",
      range: "x1",
      duration : "Until target recovers",
      summary: "Target receives a penalty to all actions requiring sight.",
      mods: [
        {
          name: "Medium Area of Effect",
          difficulty: "2",
          summary: "The spell affects everyone in a medium area of effect.",
        },
        {
          name: "Large Area of Effect",
          difficulty: "3",
          summary: "The spell affects everyone in a large area of effect.",
        },
        {
          name: "Strong",
          difficulty: "1",
          summary: "The Vigor roll to shake off the effect is made at -2.",
        },
      ],
    },
    {
      name: "Bolt",
      difficulty: "1",
      range: "x2",
      duration : "Instant",
      summary: "2d6 ranged attack (3d6 with a raise).",
      mods: [
        {
          name: "Damage",
          difficulty: "2",
          summary: "Bolt causes 3d6 damage (4d6 with a raise).",
        },
      ],
    },
    {
      name: "Burrow",
      difficulty: "2",
      range: "x1",
      duration : "Maintain",
      summary: "Target may travel by tunnelling through the earth.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each."
        },
        {
          name: "Power",
          difficulty: "1",
          summary: "The caster can burrow through stone, concrete, or similar substances.",
        },
      ],
    },
    {
      name: "Burst",
      difficulty: "2",
      range: "Cone",
      duration : "Instant",
      summary: "Cone-shaped attack for 2d6 damage (3d6 with a raise).",
      mods: [
        {
          name: "Damage",
          difficulty: "2",
          summary: "Burst causes 3d6 damage (4d6 with a raise).",
        },
      ],
    },
    {
      name: "Confusion",
      difficulty: "1",
      range: "x1",
      duration : "1 round",
      summary: "Makes target Distracted and Vulnerable.",
      mods: [
        {
          name: "Medium Area of Effect",
          difficulty: "2",
          summary: "The spell affects everyone in a medium area of effect."
        },
        {
          name: "Large Area of Effect",
          difficulty: "3",
          summary: "The spell affects everyone in a large area of effect.",
        },
      ]
    },
    {
      name: "Darksight",
      difficulty: "1",
      range: "x1",
      duration : "Maintain",
      summary: "Ignore up to 4 points of illumination penalties, or 6 with a raise.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    {
      name: "Deflection",
      difficulty: "3",
      range: "x1",
      duration : "Maintain",
      summary: "Foes must subtract 2 from attack rolls directed at the user (or 4 with a raise).",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    {
      name: "Detect Arcana",
      difficulty: "2",
      range: "x1",
      duration : "Maintain",
      summary: "The caster is able to detect nearby magic.",
      mods: [],
    },
    // {
    //   name: "Elemental Manipulation",
    //   difficulty: "1",
    //   range: "x1",
    //   duration : "Maintain",
    //   summary: "Allows minor manipulation of basic elements."
    // },
    {
      name: "Empathy",
      difficulty: "1",
      range: "x1",
      duration : "Maintain",
      summary: "Improves social trait rolls.",
      mods: [],
    },
    {
      name: "Entangle",
      difficulty: "2",
      range: "x1",
      duration : "Instant",
      summary: "Bind or entangle foes.",
      mods: [
        {
          name: "Medium Area of Effect",
          difficulty: "2",
          summary: "The spell affects everyone in a medium area of effect.",
        },
        {
          name: "Large Area of Effect",
          difficulty: "3",
          summary: "The spell affects everyone in a large area of effect.",
        },
        {
          name: "Strong",
          difficulty: "2",
          summary: "The entangling material is particularly resilient. Rolls to break free are made at -2 and its Hardness increases to 7.",
        },
      ],
    },
    {
      name: "Environmental Protection",
      difficulty: "2",
      range: "x1",
      duration : "Maintain",
      summary: "Protect target from hazardous environments.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    {
      name: "Fear",
      difficulty: "2",
      range: "x1",
      duration : "Instant",
      summary: "Causes fear check.",
      mods: [
        {
          name: "Medium Area of Effect",
          difficulty: "2",
          summary: "The spell affects everyone in a medium area of effect.",
        },
        {
          name: "Large Area of Effect",
          difficulty: "3",
          summary: "The spell affects everyone in a large area of effect.",
        },
      ],
    },
    {
      name: "Havoc",
      difficulty: "2",
      range: "x1",
      duration : "Instant",
      summary: "Targets in a medium area of effect are Distracted and may be hurled.",
      mods: [
        {
          name: "Large Area of Effect",
          difficulty: "1",
          summary: "The spell affects everyone in a large area of effect."
        },
        {
          name: "Strong",
          difficulty: "2",
          summary: "Harder to resist being hurled.",
        },
      ]
    },
    {
      name: "Healing",
      difficulty: "3",
      range: "Touch",
      duration : "Instant",
      summary: "Restores Wounds less than an hour old. Can also cure poison or disease.",
      mods: [
        {
          name: "Neutralize Poison or Disease",
          difficulty: "1",
          summary: "A successful healing roll negates any poison or disease. If the poison or disease has a bonus or penalty associated with it, the modifier applies to the arcane skill roll as well.",
        },
      ]
    },
    {
      name: "Illusion",
      difficulty: "3",
      range: "x1",
      duration : "Maintain",
      summary: "Creates imaginary images.",
      mods: [
        {
          name: "Strong",
          difficulty: "1",
          summary: "Smarts rolls to disbelieve the illusion are made at -2.",
        },
      ],
    },
    {
      name: "Light/Darkness",
      difficulty: "2",
      range: "x1",
      duration : "Maintain",
      summary: "Creates or dispels illumination.",
      mods: [
        {
          name: "Mobile",
          difficulty: "1",
          summary: "The caster can move the area of effect each round after casting, or attach it to an inanimate object when first cast.",
        },
      ],
    },
    {
      name: "Mind Reading",
      difficulty: "2",
      range: "x1",
      duration : "Instant",
      summary: "Opposed roll vs Smarts to read mind.",
      mods: [],
    },
    {
      name: "Protection",
      difficulty: "1",
      range: "x1",
      duration : "Maintain",
      summary: "Grants additional Armor.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
        {
          name: "More Armor",
          difficulty: "1",
          summary: "Success grants more additional Armor.",
        },
        {
          name: "Toughness",
          difficulty: "2",
          summary: "Protection provides Toughness instead of Armor and is not affected by AP (magical or otherwise). This means it stacks with natural or worn armor.",
        },
      ],
    },
    {
      name: "Relief",
      difficulty: "1",
      range: "x1",
      duration : "Instant",
      summary: "Removes Fatigue, Shaken; & Stun with raise.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    {
      name: "Shape Change",
      difficulty: "3",
      range: "Self",
      duration : "Maintain",
      summary: "Caster takes on the form of a small animal.",
      mods: [
        {
          name: "Speech",
          difficulty: "1",
          summary: "The caster's animal form can speak.",
        },
      ],
    },
    {
      name: "Smite",
      difficulty: "2",
      range: "x1",
      duration : "Maintain",
      summary: "Increase a weapon's damage by +2/+4.",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
    // {
    //   name: "Silence",
    //   difficulty: "1",
    //   range: "x1",
    //   duration : "Maintain",
    //   summary: "Mute all sound up to a loud shout within a large area of effect."
    // },
    {
      name: "Speak Language",
      difficulty: "1",
      range: "x1",
      duration : "Maintain",
      summary: "The caster can speak and understand any language.",
      mods: [],
    },
    {
      name: "Stun",
      difficulty: "2",
      range: "x1",
      duration : "Instant",
      summary: "Target is stunned.",
      mods: [
        {
          name: "Medium Area of Effect",
          difficulty: "2",
          summary: "The spell affects everyone in a medium area of effect.",
        },
        {
          name: "Large Area of Effect",
          difficulty: "3",
          summary: "The spell affects everyone in a large area of effect.",
        },
      ],
    },
    {
      name: "Summon Ally",
      difficulty: "2",
      range: "x1",
      duration : "5 rounds",
      summary: "Conjures a magical servant.",
      mods: [
        {
          name: "Claws",
          difficulty: "1",
          summary: "The ally has claws that do Str+d6 damage.",
        },
        {
          name: "Fly",
          difficulty: "2",
          summary: "The ally can fly at Pace 12.",
        },
      ],
    },
    {
      name: "Wall Walker",
      difficulty: "1",
      range: "x1",
      duration : "5 rounds",
      summary: "Character can walk on walls at half Pace (full Pace with raise).",
      mods: [
        {
          name: "Additional Recipients",
          difficulty: "1",
          summary: "The spell may affect more than one target for +1 difficulty each.",
        },
      ],
    },
  ],
}