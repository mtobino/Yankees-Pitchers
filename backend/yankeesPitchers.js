const yankeesPitchers = [
  {
    id: 1,
    name: "Gerrit Cole",
    number: "45",
    throws: "Right",
    stats: {
      era: 2.63,
      wins: 15,
      losses: 4,
      strikeouts: 222,
      whip: 0.98
    },
    contract: {
      years: "2024-2029",
      value: "$324M"
    },
    age: 33,
    hometown: "Newport Beach, CA"
  },
  {
    id: 2,
    name: "Carlos Rodón",
    number: "55",
    throws: "Left",
    stats: {
      era: 3.75,
      wins: 8,
      losses: 7,
      strikeouts: 125,
      innings: 132,
      whip: 1.22
    },
    contract: {
      years: "2023-2028",
      value: "$162 million"
    },
    age: 31,
    hometown: "Holly Springs, NC"
  },
  {
    id: 3,
    name: "Marcus Stroman",
    number: "0",
    throws: "Right",
    stats: {
      era: 3.95,
      wins: 10,
      losses: 9,
      strikeouts: 145,
      innings: 172,
      whip: 1.25
    },
    contract: {
      years: "2024-2025",
      value: "$37 million"
    },
    age: 32,
    hometown: "Medford, NY"
  },
  {
    id: 4,
    name: "Nestor Cortes",
    number: "65",
    throws: "Left",
    stats: {
      era: 4.45,
      wins: 7,
      losses: 5,
      strikeouts: 93,
      innings: 108,
      whip: 1.31
    },
    contract: {
      years: "2024",
      value: "$3.95 million"
    },
    age: 29,
    hometown: "Surgidero de Batabanó, Cuba"
  },
  {
    id: 5,
    name: "Clarke Schmidt",
    number: "36",
    throws: "Right",
    stats: {
      era: 4.64,
      wins: 9,
      losses: 9,
      strikeouts: 149,
      innings: 159,
      whip: 1.35
    },
    contract: {
      years: "2024",
      value: "$2.1 million"
    },
    age: 28,
    hometown: "Acworth, GA"
  },
  {
    id: 6,
    name: "Luis Gil",
    number: "81",
    throws: "Right",
    stats: {
      era: 3.85,
      wins: 2,
      losses: 1,
      strikeouts: 38,
      innings: 29,
      whip: 1.28
    },
    contract: {
      years: "2024",
      value: "$720,000"
    },
    age: 25,
    hometown: "Azua, Dominican Republic"
  }
]

// Additional statistics and calculations
const teamPitchingStats = {
  totalWins: 51,
  totalLosses: 35,
  teamERA: 3.88,
  totalStrikeouts: 772,
  totalInnings: 809,
  averageWHIP: 1.23,
  savesOpportunities: 45,
  saves: 38,
  blownSaves: 7
}

// Injury List
const injuredPitchers = [
  {
    name: "Scott Effross",
    injury: "Tommy John Surgery",
    expectedReturn: "Mid 2024",
    status: "60-day IL"
  },
  {
    name: "Lou Trivino",
    injury: "Right Elbow",
    expectedReturn: "Late 2024",
    status: "60-day IL"
  }
]

module.exports = {
  yankeesPitchers,
  teamPitchingStats,
  injuredPitchers
} 