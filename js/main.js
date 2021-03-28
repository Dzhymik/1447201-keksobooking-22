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

const getSubarryFromArray = (array) =>{
  let subArray = [];

  let n = Math.floor(Math.random() * array.length);

  for (let i = 0; i < n; i++) {
    subArray[i] = array.splice(i, 1)[0];
  }

  return subArray;
}



// 3. Больше деталей  ============================================================

const  titleList = [
  "Tallinn City Apartments Old Town Suites",
  "Revelton Suites Tallinn",
  "Hilltop Apartments",
  "Popup Living Kakumae",
  "Bob W Telliskivi",
  "Jõe Apartments",
  "Estonishing Stay"
];
const typeList = ["palace", "flat", "house", "bungalow"];
const checkInList = ["12:00", "13:00", "14:00"];
const checkOutList =["12:00", "13:00", "14:00"];
const featuresList = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const descriptionList = ["Апартаменты Tallinn City Old Town Suites с рестораном на территории расположены в центре Таллина, недалеко от Девичьей башни, музея и концертного зала Нигулисте и Таллинской ратуши.",
"Апартаменты Revelton Suites находятся в центре Таллина, в 10 минутах ходьбы от холма Томпеа и Старого города Таллина. К услугам гостей бесплатная охраняемая парковка и Wi-Fi.",
"Эти апартаменты расположены в 800 м от Ратушной площади Таллина. К услугам гостей бесплатный Wi-Fi. В 600 метрах находится Эстонская национальная опера.",
"Эстонский музей под открытым небом расположен в 3,3 км. К услугам гостей апартаментов Popup Living Kakumae Marina ресторан, бар, кондиционер, патио и бесплатный Wi-Fi.",
"Апартаменты Bob W. Telliskivi расположены в Таллине, в 2,3 км от пляжа Пельгуланд и в 2 км от замка Тоомпеа. К услугам гостей бесплатный Wi-Fi, сад с детской игровой площадкой и фитнес-зал.",
"Апартаменты Jõe расположены рядом с центром Таллина, всего в 5 минутах ходьбы от порта Таллина и в 1,8 км от железнодорожного вокзала Таллин-Балтийский.",
"Апартаменты Estonishing Stay Avangard расположены в Таллине. К услугам гостей бесплатный Wi-Fi и фитнес-зал. Из окон открывается вид на город."];

const photosList = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

const getAvatar = () => "img/avatars/user0" + getRandFloat(1, 8, 0) + ".png";
const getTitle = () => titleList[Math.floor(Math.random() * titleList.length)];
const getType = () => typeList[Math.floor(Math.random() * titleList.length)];
const getCheckIn = () => checkInList[Math.floor(Math.random() * checkInList.length)];
const getCheckOut = () => checkOutList[Math.floor(Math.random() * checkOutList.length)];
const getFeatures = () => getSubarryFromArray(featuresList);
const getDescription = () => descriptionList[Math.floor(Math.random() * descriptionList.length)];
const getPhotos = () => getSubarryFromArray(photosList);

const generateDataItem = () => {

  const obj = {};

  obj.location = {};
  obj.location.x = getRandFloat(35.65000, 35.70000, 5);
  obj.location.y = getRandFloat(139.70000, 139.80000, 5);
  obj.author = {};
  obj.author.avatar = getAvatar();
  obj.offer = {};
  obj.offer.title = getTitle();
  obj.offer.address =  obj.location.x + ", " + obj.location.y;
  obj.offer.price = getRandFloat(0, 5000, 0);
  obj.offer.type = getType();
  obj.offer.rooms = getRandFloat(1, 6, 0);
  obj.offer.guests = getRandFloat(1, 4, 0);
  obj.offer.checkin = getCheckIn();
  obj.offer.checkout = getCheckOut();
  obj.offer.features = getFeatures();
  obj.offer.description = getDescription();
  obj.offer.photos = getPhotos();

  return obj;
}

const generateDataList = () => {
  const dataList = [];

  for (let i = 0; i < 10; i++) {
    dataList[i] = generateDataItem();
  }

  return dataList;
}

const dataList = generateDataList();
console.log(dataList);





