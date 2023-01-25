
import rawdata from './rawdata.txt'


let fetchData = async () => {
  let response = await fetch(rawdata);
  let final = await response.text();
  let data = final.split('\n').map(word => word.toUpperCase())
  return data;
}

const data = fetchData();

console.log(data)

// const data = fs.readFileSync('src/rawdata.txt', {encoding: 'utf-8'})
// .split('\n').map(word => word.toUpperCase())

// console.log(data)


export const WORDS = [
  'AGENT',
  'WORLD',
  'ABOUT',
  'HEART',
  'WATER',
  'SIXTY',
  'BOARD',
  'MONTH',
  'MUSIC',
  'PARTY',
  'PIANO',
  'MOUTH',
  'WOMAN',
  'SUGAR',
  'AMBER',
  'DREAM',
  'LAUGH',
  'TIGER',
  'EARTH',
  'RIVER',
  'MONEY',
  'WORDS',
  'SMILE',
  'LEMON',
  'SOUTH',
  'AFTER',
  'STONE',
  'THING',
  'LIGHT',
  'STORY',
  'POWER',
  'TODAY',
  'RANGE',
  'PEARL',
  'VENOM',
  'PROXY',
  'ROUND',
  'HOVER',
  'CANDY',
  'ABOVE',
  'PHONE',
  'OTHER',
  'SMART',
  'BLACK',
  'CYCLE',
  'MAGIC',
  'FRUIT',
  'RADIO',
  'ROYAL',
  'HONEY',
];
