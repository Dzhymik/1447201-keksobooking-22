import './data.js';


const  titleList = [
  "Tallinn City Apartments Old Town Suites",
  "Park Inn by Radisson Meriton Conference & Spa Hotel Tallinn",
  "Hilltop Apartments - City Centre Foorum",
  "The von Stackelberg Hotel Tallinn",
  "Hotel Telegraaf, Autograph Collection",
  "Park Inn by Radisson Central Tallinn",
  "Schlössle Hotel - The Leading Hotels of the World"
];
const typeList = ["palace", "flat", "house", "bungalow"];
const checkInList = ["12:00", "13:00", "14:00"];
const checkOutList =["12:00", "13:00", "14:00"];
const featuresList = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const descriptionList = ["Апартаменты с рестораном на территории расположены в центре Таллина, недалеко от Девичьей башни, музея и концертного зала Нигулисте и Таллинской ратуши.",
"Апартаменты находятся в центре Таллина, в 10 минутах ходьбы от холма Томпеа и Старого города Таллина. К услугам гостей бесплатная охраняемая парковка и Wi-Fi.",
"Эти апартаменты расположены в 800 м от Ратушной площади Таллина. К услугам гостей бесплатный Wi-Fi. В 600 метрах находится Эстонская национальная опера.",
"Эстонский музей под открытым небом расположен в 3,3 км. К услугам гостей апартаментов ресторан, бар, кондиционер, патио и бесплатный Wi-Fi.",
"Апартаменты расположены в Таллине, в 2,3 км от пляжа Пельгуланд и в 2 км от замка Тоомпеа. К услугам гостей бесплатный Wi-Fi, сад с детской игровой площадкой и фитнес-зал.",
"Апартаменты расположены рядом с центром Таллина, всего в 5 минутах ходьбы от порта Таллина и в 1,8 км от железнодорожного вокзала Таллин-Балтийский.",
"Апартаменты расположены в Таллине. К услугам гостей бесплатный Wi-Fi и фитнес-зал. Из окон открывается вид на город."];

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




export {getAvatar, getTitle, getType, getCheckIn, getCheckOut, getFeatures, getDescription, getPhotos};
