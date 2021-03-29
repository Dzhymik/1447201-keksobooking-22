import './util.js';

function getRandFloat(x1, x2, k) {
  if(x1 === x2) {
    return x1;
  } else if(x1 > x2) {
    let buff = x1;
    x1 = x2;
    x2 = buff;
  }
  return parseFloat((x1 + Math.random() * (x2 - x1)).toFixed(k));
}

let a = getRandFloat(7.2, 6.2, 5);

console.log(a);

//
const getSubarryFromArray = (array) =>{
  let subArray = [];

  let n = Math.floor(Math.random() * array.length);

  for (let i = 0; i < n; i++) {
    subArray[i] = array.splice(i, 1)[0];
  }

  return subArray;
}

//
const generateDataList = () => {
  const dataList = [];

  for (let i = 0; i < 10; i++) {
    dataList[i] = generateDataItem();
  }

  return dataList;
}

const dataList = generateDataList();
console.log(dataList);



export {getRandFloat, getSubarryFromArray, generateDataList};

я
