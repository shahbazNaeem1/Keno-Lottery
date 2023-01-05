export const generateRandoms = (possibleSlots: number, chooseSlots: number) => {
  const array = [...Array(possibleSlots).keys()];

  const shuffled = array.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, chooseSlots);
};
