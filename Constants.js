const populationPerMillion = {
  0: 20560,
  1: 30450,
  2: 40569,
  3: 4567,
};
const categories = [
  {
    label: "Beauty",
    ctr: 1,
    cpc: 0.58,
    id: 0,
    population: populationPerMillion[0],
    rating: 3.4,
    ipd: 12,
  },
  {
    label: "Educational",
    ctr: 0.32,
    cpc: 0.4,
    id: 1,
    population: populationPerMillion[1],
    rating: 4.0,
    ipd: 10,
  },
  {
    label: "Services",
    ctr: 0.48,
    cpc: 0.9,
    id: 2,
    population: populationPerMillion[2],
    rating: 4.2,
    ipd: 11,
  },
  {
    label: "Gambling",
    ctr: 0.37,
    id: 3,
    cpc: 1,
    population: populationPerMillion[3],
    rating: 1.2,
    ipd: 3,
  },
];

module.exports = { categories };
