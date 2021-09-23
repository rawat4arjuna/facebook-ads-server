const populationPerMillion = {
  0: 200560,
  1: 300450,
  2: 400569,
  3: 45607,
};
const categories = [
  {
    label: "Beauty",
    ctr: 1,
    cpc: 0.5,
    id: 0,
    population: populationPerMillion[0],
    rating: 3.4,
  },
  {
    label: "Educational",
    ctr: 2.3,
    cpc: 0.4,
    id: 1,
    population: populationPerMillion[1],
    rating: 4.0,
  },
  {
    label: "Services",
    ctr: 1.4,
    cpc: 0.9,
    id: 2,
    population: populationPerMillion[2],
    rating: 4.2,
  },
  {
    label: "Gambling",
    ctr: 0.3,
    id: 3,
    cpc: 1,
    population: populationPerMillion[3],
    rating: 1.2,
  },
];

module.exports = { categories };
