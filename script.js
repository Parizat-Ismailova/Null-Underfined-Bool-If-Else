/* Task #1
В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно приветствовать его на русском 
если “ky” на кыргызском если будет другое значение нужно вывести сообщение “Я не знаю такого языка”*/
/*let lang = prompt("Your language: 'English(write 'en')' or 'Spanish(write 'sp')?'");
if (lang == "en"){
alert("Hello");
}else if (lang == "sp"){
    alert("Hola");
}else if (lang != "en"){
    alert("I don't know this language");
}

/* Task #2
Дана строка, состоящая из символов, например, '**`abcde`**'. Проверьте, что первым символом этой строки является буква '**`a`**'. 
Если это так - выведите '**`да`**', в противном случае выведите '**`нет`**'. */
/*let string = "abcde";
let firstSymbol = "true";
console.log(firstSymbol);
alert(string.substring(0,1));
document.write(`<h1>This is your first symbol: ${string[0]}</h1>`);

/* Task #3
Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 1, 2 или 3. Если это так - выведите 'да', 
в противном случае выведите 'нет'.*/
/*const a = 12345;
const b = a.toString();
let x = "true";
console.log(x);
alert(b[0]);
document.write(`<h1>This is your first number: ${b[0]}</h1>`);



/*HW #1
let userNum = Number(prompt("Введите число"));

if (userNum % 2 === 0) {
  document.write("Четное число");
} else {
  document.write("Нечетное число");
}
Определяем и выводим на экран информацию о том, четное введенное число или нечетное*/
let num = +prompt("Write the number: ");
let aa = ["Even", "Odd"];
alert(aa[num % 2]);

/* HW #2
let month = "june";
month = month.toLowerCase();

if (month === "january") {
  document.write("winter");
} else if (month === "february") {
  document.write("winter");
} else if (month === "december") {
  document.write("winter");
} else if (month === "march") {
  document.write("spring");
} else if (month === "april") {
  document.write("spring");
} else if (month === "may") {
  document.write("may");
} else if (month === "june") {
  document.write("summer");
} else if (month === "july") {
  document.write("summer");
} else if (month === "august") {
  document.write("summer");
} else if (month === "september") {
  document.write("autumn");
} else if (month === "october") {
  document.write("autumn");
} else if (month === "november") {
  document.write("autumn");
} else {
  document.write("There is no such month");
}
Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение с названием времени года. 
Например:
**Пользователь:** январь
**Компьютер:** это зима */
let month = prompt("Choose a month: ");
let winter = 'dec,december,jan,january,feb,february,12,1,2';
let spring = 'mar,march,apr,april,may,3,4,5';
let summer = 'jun,june,jul,july,aug,august,6,7,8';
let fall = 'sep,september,oct,october,nov,november,9,10,11';
let season = 'unknown';
if (winter.indexOf(month) != -1){
    season = 'This is winter';
} else if (spring.indexOf(month) !=-1){
    season = 'This is spring';
} else if (summer.indexOf(month) !=-1){
    season = 'This is summer';
} else if (fall.indexOf(month) !=-1){
    season = 'This is fall';
}
alert(season);

/* HW #3
Определяем животное, ассоциированное с введенным годом в китайском гороскопе
Например:
**Пользователь**: 2021
**Компьютер**: Бык */
let year = prompt("Write your birth year: ");
let dragon = '1940';
let snake = '1941';
let horse ='1942';
let sheep ='1943';
let monkey ='1944';
let rooster ='1945';
let dog ='1946';
let pig ='1947';
let rat ='1948';
let ox ='1949';
let tiger ='1950';
let rabbit ='1951';
let zodiac =(1940 + (year - 1940) % 12);
if (dragon.lastIndexOf(year) !=-1){
    zodiac = 'Dragon';
} else if (snake.lastIndexOf(year) !=-1){
    zodiac ='Snake';
} else if (horse.lastIndexOf(year) !=-1){
    zodiac ='Horse';
} else if (sheep.lastIndexOf(year) !=-1){
    zodiac ='Sheep';
}else if (monkey.lastIndexOf(year) !=-1){
    zodiac ='Monkey';
}else if (rooster.lastIndexOf(year) !=-1){
    zodiac = 'Rooster';
}else if (dog.lastIndexOf(year) !=-1){
    zodiac = 'Dog';
}else if (pig.lastIndexOf(year) !=-1){
    zodiac = 'Pig';
}else if (rat.lastIndexOf(year) !=-1){
    zodiac= 'Rat';
}else if (ox.lastIndexOf(year) !=-1){
    zodiac = 'Ox';
}else if (tiger.lastIndexOf(year) !=-1){
    zodiac = 'Tiger';
}else if (rabbit.lastIndexOf(year) !=-1) {
    zodiac = 'Rabbit';
}                              
alert(zodiac);

/*let zodiac = +prompt('Write your birth year: ');
let cycle = 12;
if (zodiac % cycle === 0) {
    document.write('<b> Your zodiac is Monkey</b>');
} else if (zodiac % cycle === 1) {
    document.write('<b> Your zodiac is Rooster</b>');
}else if (zodiac % cycle === 2) {
    document.write('<b> Your zodiac is Dog</b>');
}else if (zodiac % cycle === 3) {
    document.write('<b> Your zodiac is Pig</b>');
}else if (zodiac % cycle === 4) {
    document.write('<b> Your zodiac is Rat</b>');
}else if (zodiac % cycle === 5) {
    document.write('<b> Your zodiac is Ox</b>');
}else if (zodiac % cycle === 6) {
    document.write('<b> Your zodiac is Tiger</b>');
}else if (zodiac % cycle === 7) {
    document.write('<b> Your zodiac is Rabbit</b>');
}else if (zodiac % cycle === 8) {
    document.write('<b> Your zodiac is Dragon</b>');
}else if (zodiac % cycle === 9) {
    document.write('<b> Your zodiac is Snake</b>');
}else if (zodiac % cycle === 10) {
    document.write('<b> Your zodiac is Horse</b>');
}else if (zodiac % cycle === 11) {
    document.write('<b> Your zodiac is Sheep</b>');
}else {
    alert('Wrong information');
}*/


