// 1. Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік".
// При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const form = prompt("Який напій вам подобається?");
switch (form) {
  case "Кава":
    alert("Чудовий смак! Кава зранку саме те, що потрібно");
    break;
  case "Чай":
    alert("Чудовий вибір, чай діє як заспокійливе!");
    break;
  case "Сік":
    alert("Чудовий вибір, сік допомгає підняти настрій!");

  default:
    console.log(`А що тоді вам за напій подобається?`);
}

//   2. Створити розмітку з полем введення, що приймає рядок та кнопкою.
//  При натисканні на кнопку перевіряти,
//   чи введений рядок є днем тижня (наприклад: "понеділок",
//  "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

// if (day === "Понеділок") {
//   alert("Понеділок день тяжкий");
// } else if (day === "Вівторок") {
//   alert("Вівторок день працьовитий");
// } else if (day === "Середа") {
//   alert("Середа день жоский, даже дуже");
// } else if (day === "Четвер") {
//   alert(" День легкий");
// } else if (day === "Пятниця") {
//   alert("Пятниця все ще працьовитий день");
// } else if (day === "Суббота") {
//   alert("Ура, вихідний, можна спати");
// } else if (day === "Неділя") {
//   alert("Просто вихідний");
// } else {
//   alert("Шо");
// }

const day = prompt("Який сьогодні день тижня?");

switch (day) {
  case "Понеділок":
    alert("Понеділок день тяжкий");
    break;
  case "Вівторок":
    alert("Вівторок день працьовитий");
    break;
  case "Середа":
    alert("Середа день жоский, даже дуже");
    break;
  case "Четвер":
    alert(" День легкий");
    break;
  case "Пятниця":
    alert("Пятниця все ще працьовитий день");
    break;
  case "Суббота":
    alert("Ура, вихідний, можна спати");
    break;
  case "Неділя":
    alert("Просто вихідний");
    break;

  default:
    alert("Шо");
}

// 3. Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
// При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

const Mounth = prompt("Введіть номер цього місяця ");
switch (Mounth) {
  case "01":
    alert("Січень");
    break;
  case "02":
    alert("Лютий");
    break;
  case "03":
    alert("Березень");
    break;
  case "04":
    alert("Квітень");
    break;
  case "05":
    alert("Травень");
    break;
  case "06":
    alert("Червень");
    break;
  case "07":
    alert("Липень");
    break;
  case "08":
    alert("Серпень");
    break;
  case "09":
    alert("Вересень");
    break;
  case "10":
    alert("Жовтень");
    break;
  case "11":
    alert("Листопад");
    break;
  case "12":
    alert("Грудень");

  default:
    alert(шо);
}

// 4. Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
// При натисканні на кнопку виводити кількість днів у цьому місяці.

const dayMounth = prompt("Веддіть номер місяця, про який хочете дізнатись");

switch (dayMounth) {
  case "01":
    alert("Січень - 31 день");
    break;
  case "02":
    alert("Лютий - 28 днів");
    break;
  case "03":
    alert("Березень - 31 день");
    break;
  case "04":
    alert("Квітень - 30 днів");
    break;
  case "05":
    alert("Травень - 31 день");
    break;
  case "06":
    alert("Червень - 30 днів");
    break;
  case "07":
    alert("Липень - 31 день");
    break;
  case "08":
    alert("Серпень - 31 день");
    break;
  case "09":
    alert("Вересень - 30 днів");
    break;
  case "10":
    alert("Жовтень - 31 день");
    break;
  case "11":
    alert("Листопад - 30 днів");
    break;
  case "12":
    alert("Грудень - 31 день");

  default:
    alert("Повторіть запитання");
}

// 5. Створити розмітку з полем введення, що приймає назву кольору
//  (наприклад, "червоний", "синій" і т.д.) та кнопкою.
//   При натисканні на кнопку виводити відповідне повідомлення про дію:
//    якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

// const color =
//   introduction === "Червоний" ||
//   introduction === "Зелений" ||
//   introduction === "Жовтий";
// console.log(color);

// if (introduction === "Червоний") {
//   alert("Стоп!");
// } else if (introduction === "Зелений") {
//   alert("Можете йти");
// } else if (introduction === "Жовтий") {
//   alert("Зачекайте");
// } else {
//   alert("Ви ввели неправильний колір");
// }
const introduction = prompt("Введіть червоний, зелений або жовтий колір");

switch (introduction) {
  case "Червоний":
    alert("Стоп!");
    break;
  case "Зелений":
    alert("Можете йти");
    break;
  case "Жовтий":
    alert("Зачекайте");

  default:
    alert("Ви ввели неправильний колір");
}

//  6. Створити розмітку з двома полями введення, що приймають числа та список (select)
//   з варіантами вибору операцій: "+", "-", "*", "/".
//  При натисканні на кнопку виводити результат обраної операції над цими числами.
//  Користувач повинен бути попереджений про можливість ділення на нуль.

const intro2 = prompt("Якесь число ");
const intro3 = prompt("Якесь число");
const intro1 = prompt("Який оператор ви хочете обрати?  + ,  - , * ,  /  ");
let intro4;

switch (intro1) {
  case " +":
    intro4 = intro2 + intro3;
    alert(`Відповідь ${intro4}`);
    break;
  case "-":
    intro4 = intro2 - intro3;
    alert(`Відповідь ${intro4}`);
    break;
  case "*":
    intro4 = intro2 * intro3;
    alert(`Відповідь ${intro4}`);
    break;
  case "/":
    intro4 = intro2 / intro3;
    alert(`Відповідь ${intro4}`);

    intro4 = intro2 / 0;
    alert("на нуль ділити не можна");
    break;

  default:
    alert("Не знаю");
}
