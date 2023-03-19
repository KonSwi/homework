//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. 
// Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
const typeA = true; 
const typeB = 16; 
const typeC = 'yeah';
console.log('Zadanie 1. a)');
console.log(typeA + " - " + typeof typeA);
console.log(typeB + " - " + typeof typeB);
console.log(typeC + " - " + typeof typeC);
console.log('-----------');

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
console.log('Zadanie 1. b) 2 + "2"');
const operationOne = 2 + "2";
console.log(operationOne, typeof operationOne);
console.log('Wynik: 22 string. Przy operatorze "+" stringi łączą się, nie sumują się matemtycznie.');
console.log('-----------');

// 2 + 2
console.log('Zadanie 1. b) 2 + 2');
const operationTwo = 2 + 2;
console.log(operationOne, typeof operationOne);
console.log('Wynik: 4 number. Numbery sumują się. Matematyka :)');
console.log('-----------');
// 2 * "2"
console.log('Zadanie 1. b) 2 * "2"');
const operationThree = 2 * "2";
console.log(operationThree, typeof operationThree);
console.log('Wynik: 4 number. Mnożenie. Operator "*" traktuje stringa jak number (jeśli w stringu jest liczba :) )');
console.log('-----------');
// 2 * 2
console.log('Zadanie 1. b) 2 * 2');
const operationFour = 2 * 2;
console.log(operationFour, typeof operationFour);
console.log('Wynik 4 number. "*" to mnożenie. Matematyka :)');
console.log('-----------');
// // 1 == true
console.log('Zadanie 1. b) 1 == true');
const operationFive = 1 == true
console.log(operationFive, typeof operationFive);
console.log('Wynik true ponieważ boolean zwraca tylko true lub false. W JS true przyjmuje wartość 1.');
console.log('-----------');
// 0 == false
console.log('Zadanie 1. b) 0 == false');
const operationSix = 0 == false;
console.log(operationSix, typeof operationSix);
console.log('Jak wyżej. W JS false przyjmuje m.in. wartość 0.');
console.log('-----------');
// 0 == null
console.log('Zadanie 1. b) 0 == null');    
const operationSeven = 0 == null;
console.log(operationSeven, typeof operationSeven);
console.log('Wynik false, ponieważ null oznacza nieznaną wartość lub pustą zmienną.');
console.log('-----------');
// null == undefined
console.log('Zadanie 1. b) null == undefined');
const operationEight = null == undefined;
console.log(operationEight, typeof operationEight);
console.log('Wynik true ponieważ undefined nie ma przypisanej wartości początkowej.');    
console.log('-----------');
//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log('"=" - przypisuje do właściwości po lewej od znaku, wartośc po prawej od znaku');
console.log('"==" - porównuje wartości bez uwzględnienia ich typu');
console.log('"===" - porównuje wartości z uwzględnieniem ich typu');
console.log('-----------');
//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log('Zadanie 1. c)');         
console.log('Typ prosty przechowuje wartości bezpośrednio u siebie.');    
console.log('Typ referrencyjny przechowuje referencję, odniesienie do innego obiektu.'); 
console.log('Przyklad typu prostego: const firstName = "Ala "; const surName = "Kotowska";'); 
console.log('Przyklad typu referencyjnego: const personName = firstName + surName;');
console.log('-----------');
//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: 
// let val = 0 (przekonwertuj na typ Boolean)
console.log('Zadanie 1. d) 0 na Boolean');   
let val = 0
console.log(Boolean(val))
console.log('-----------');
// let num = "2137" (przekonwertuj na typ Number)
console.log('Zadanie 1. d) "2137" na Number');   
let num = "2137"
console.log(Number(num))
console.log('-----------');
// let str = 007 (przekonwertuj na String)
console.log('Zadanie 1. d) 007 na String');   
let str = 007
console.log(String(str))
console.log('-----------');
// let und = undefined (przekonwertuj na Boolean)
console.log('Zadanie 1. d) undefined na Boolean');   
let und = undefined; 
console.log(Boolean(und))
console.log('-----------');
//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log('Zadanie 1. e)');
const arrE = new Array()
arrE.push("Ala", true, 21)
console.log(arrE)
console.log('-----------');
//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log('Zadanie 1. f)');
const obj = new Object()
obj.name = "Ala";
obj.age = 21;
obj.adult = true;
console.log(obj);
console.log('-----------');
//g)* opisz krótko czym dokładnie jest typ NaN
console.log('Zadanie 1. g)*');
console.log('typ Number, a rozwinięcie skrótu to Not a number. Nie wiem co więcej napisać :)');
console.log('-----------');
//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log('Zadanie 1. h)**');
console.log('Najmłodszy, prosty typ zmiennej w JS. Cechuje go unikatowość (za każdym razem przyjmuje nową wartość), którą przedstawia poniższy przykład.');
console.log('let symbol1 = Symbol(); let symbol2 = Symbol(); console.log(symbol1 === symbol2); wynik false');
console.log('-----------');
//--------------------------
// 2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log('Zadanie 2. a)');    
const sum = (a,b,c) => console.log(a + b + c)
sum(2,5,6)
console.log('-----------');
//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log('Zadanie 2. b)'); 
const triangleArea = (a, h) => console.log(1 / 2 * a * h);
triangleArea(28,9)
console.log('-----------');
//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log('Zadanie 2. c)'); 
const ageC = a => { 
let howManyYears = a - 18;
    if (a < 18) {
        console.log('Podany wiek jest mniejszy, niz 18 lat.');
    } else {
     console.log('Ilość lat, które mineły od 18 urodzin: ' + howManyYears + '.');
    }
}
ageC(62)
ageC(16)
console.log('-----------');

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log('Zadanie 2. d)'); 
const checkItem = array => console.log('Liczba elementów w przekazanej tablicy: ' + array.length + '. Elementem numer 3 jest: ' + array[2] + '.');
const arr = ['first', 'second', true, 13, {age: 23, name: 'Zdzisław'}]
checkItem(arr)
console.log('-----------');
//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log('Zadanie 2. e)'); 
let testPersonE = {
name: "Jan",
surname: "Kowalski",
age: 20,
height: 180
}
const aboutPersonE = person => console.log('Pan/i ' + person.name + ' ' + person.surname + ' ma ' + person.age + ' lat oraz ' + person.height + 'cm wzrostu.');
aboutPersonE(testPersonE)
console.log('-----------');
//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log('Zadanie 2. f)'); 
let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
}
const aboutPerson = (person, value) => person.age = value
const age = 56
aboutPerson(testPerson, age)
console.log(testPerson)
console.log('-----------');
//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log('Zadanie 2. g)'); 
const ifNumber = number => {
if (typeof number !== 'number') {
    console.log('Podałeś złą wartość. Funkcja przyjmuje tylko liczby.');
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
} else if (number % 3 === 0) {
    console.log('Fizz');
} else if (number % 5 === 0) {
    console.log('Buzz');
} else {
    console.log('Podana liczba nie spełnia warunków funkcji.');
}
}
ifNumber('text')
ifNumber(9)
ifNumber(10)
ifNumber(15)
ifNumber(16)
console.log('-----------');
//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log('Zadanie 2. h)'); 
const number = num => num % 2 === 0 ? console.log('Liczba ' + num + ' jest parzysta.') : console.log('Liczba ' + num + ' jest nieparzysta.')
number(6)
number(7)
console.log('-----------');
//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log('Zadanie 2. i)*'); 
function randomNumber(){
    let number = Math.random() * 9 + 1;
    console.log(number);
}
randomNumber();
console.log('-----------');
//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log('Zadanie 2. j)**'); 
function oneOfMany(a, b){
    let number = Math.random() * (b - 1) + a;
    console.log(number);
}
const numberMinJ = 1
const numberMaxJ = 99
oneOfMany(numberMinJ,numberMaxJ)
console.log('-----------');
//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log('Zadanie 2. k)***'); 
console.log('Napisz funkcję która:');
console.log('- przyjmie dwie liczby, następie wylosuje i zwróci w konsoli liczbę z podanego zakresu');
console.log('- zaokrągli wylosowaną liczbę do najbliższej liczby całkowitej i zwróci ją w konsoli');
console.log('- wyciągnie pierwiastek kwadratowy z zaokrąglonej liczby i zwróci go w konsoli');
function myIdea (a, b){
    let number = Math.random() * (b - 1) + a;
    console.log('Wylosowana liczba to: ' + number);
    let totalNumber = Math.round(number);
    console.log('Jej liczba całkowita to: ' + totalNumber);
    let element = Math.sqrt(totalNumber);
    console.log('Pierwiastek kwadratowy tej liczby to: ' + element);
}
const numberMin = 3
const numberMax = 128
myIdea(numberMin,numberMax)
console.log('-----------');
//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log('Zadanie 3. a)'); 
for (let i = 1; i <= 9; i++) {
    console.log(i);
}
console.log('-----------');
//b) napisz pętlę która odliczy od 9 do 1
console.log('Zadanie 3. b)'); 
for (let i = 9; i >= 1; i--) {
    console.log(i);
}
console.log('-----------');
//c) napisz pętlę która odliczy od 5 do 15
console.log('Zadanie 3. c)'); 
for (let i = 5; i <= 15; i++) {
    console.log(i);
} 
console.log('-----------');
//d) napisz pętlę która odliczy od 0 do -10
console.log('Zadanie 3. d)'); 
for (let i = 0; i >= -10; i--) {
    console.log(i);
}
console.log('-----------');
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log('Zadanie 3. e)'); 
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
console.log('-----------');
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log('Zadanie 3. f)'); 
for (let i = 10; i >= -10; i -= 4) { 
    console.log(i);
}
console.log('-----------');
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log('Zadanie 3. g)*'); 
for (let i = 1; i <= 100; i += i) {
    console.log(i);
}
console.log('-----------');
//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log('Zadanie 3. h)*'); 
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
    console.log(i);
    }
}
console.log('-----------');
//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log('Zadanie 3. i)*'); 
for (let i = 1; i <= 10; i++) {
    i % 2 == 0 ? console.log(i + ' jest liczbą parzystą.') : console.log(i + ' jest liczbą nieparzystą.');
} 
console.log('-----------');
//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log('Zadanie 3. j)'); 
const toNumberJ = num => { 
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
toNumberJ(18)
console.log('-----------');
//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log('Zadanie 3. k)'); 
const toNumberK = num => { 
    for (let i = 1; i <= 50; i += num) {
        console.log(i);
    }
}
toNumberK(3)
console.log('-----------');
//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log('Zadanie 3. l)'); 
const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]
const hello = array => {
    for (let i = 0; i < array.length; i++) {
        console.log("Cześć " + array[i] + "!");
    }
}
hello(arrNames)
console.log('-----------');
//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log('Zadanie 3. ł)'); 
const arrObjects = [{
brand: "Mustang",
color: "niebieski"
}, {
brand: "Tesla",
color: "czarna"
}, {
brand: "Polonez",
color: "żółty"
}, {
brand: "Toyota",
color: "fioletowa"
}]
const cars = array => { 
    for (i = 0; i < array.length; i++) {
        console.log('Przed Tobą stoi ' + array[i].color + ' ' + array[i].brand + '.');
    }
} 
cars(arrObjects)
console.log('-----------');
//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko parzyste elementy tablicy
console.log('Zadanie 3. m)'); 
const arrNumbersM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const moduloTwo = array => { 
    for (let item of array) {
        if (item % 2 === 0) {
            console.log(item);
        }
    }
}
moduloTwo(arrNumbersM)
console.log('-----------');
//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log('Zadanie 3. n)*'); 
const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]
const arrOther = []
const arrNumbers = []
const arrEven = []
const segregation = array => {
    for (let item of array) {
    if (typeof item !== 'number'){
        arrOther.push(item);
    } else if (typeof item == 'number'){
        arrNumbers.push(item);
    }
}
for (let num of arrNumbers) {
    if (num % 2 === 0) {
        arrEven.push(num);
    }
}
const object = {}
object.arrOther=arrOther;
object.arrNumbers=arrNumbers;
object.arrEven=arrEven;
return object
    }
console.log(segregation(arrTypes));
console.log('-----------');
//--------------------------
// 4. METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log('Zadanie 4. a)');
const names = ["Seba", "Kari", "Mati", "Andżi"] 
const welcom = names.map(names => 'Siema ' + names)
console.log(welcom);
console.log('-----------');
//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log('Zadanie 4. b)');
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = array10.filter(array10 => array10 % 2 === 0)
console.log(evenNumbers);
console.log('-----------');
//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log('Zadanie 4. c)');
const people = [{
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
}, {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
}, {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
}, {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
}]
const arrFemale = people.filter(people => people.gender == 'female')
console.log(arrFemale);
console.log('-----------');
//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log('Zadanie 4. d)');
const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny"
const correctShopping = shopping.toLowerCase().split(' ').sort();
console.log(correctShopping)
console.log('-----------');
//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log('Zadanie 4. e)');
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const revAlphabet = alphabet.reverse();
const connectToString = "".concat(...revAlphabet);
console.log(connectToString);
console.log('-----------');
console.log('   ');
console.log('Mam nadzieję, że jest czytelnie :)');
console.log('the end');