export const playableSpecies = [
  {
    value: 'human',
    label: 'Human',
    features: [
      { 
        heading: 'Adaptable',
        text: 'Humans begin play with an additional edge.'
      }
    ],
  },
  {
    value: 'dwarf',
    label: 'Dwarf',
    features: [
      { 
        heading: 'Low Light Vision',
        text: 'Dwarven eyes are accustomed to the dark of the underearth. They ignore penalties for Dim and Dark Illumination.'
      },
      { 
        heading: 'Reduced Pace',
        text: 'Dwarves have short legs compared to most species.'
      },
      { 
        heading: 'Tough',
        text: 'Dwarves are stout and tough. They start with increased Vigor.'
      },
    ],
  },
  {
    value: 'elf',
    label: 'Elf',
    features: [
      { 
        heading: 'Agile',
        text: 'Elves are graceful and agile. They start with increased Agility.'
      },
      { 
        heading: 'Primal',
        text: 'Elves shun most mechanical items and designs.'
      },
      { 
        heading: 'Low Light Vision',
        text: "Elven eyes amplify light. They ignore penalties for Dim and Dark Illumination."
      },
    ],
  },
  {
    value: 'drake',
    label: 'Drake',
    features: [
      { 
        heading: "Can't Swim",
        text: "Drakes' wings are a hazard in water."
      },
      { 
        heading: 'Flight',
        text: 'Drakes fly with increased speed.'
      },
      { 
        heading: 'Environmental Weakness',
        text: 'Drakes are poorly suited for frigid conditions. They suffer a penalty to resist cold environmental effects, and suffer increased damage from cold-based attacks.'
      },
      { 
        heading: 'Keen Senses',
        text: "Drakes are more perceptive than most. They begin with increased Notice."
      },
      { 
        heading: 'Reduced Pace',
        text: "Dependence on flight and bulky wings make drakes slightly slower when walking."
      },
    ],
  },
];