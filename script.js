// 1.
//Запросіть у користувача його вік та визначіть, ким він є:
//дитиною (0–12), підлітком (12–18), дорослим (18–60) або
//пенсіонером (60– …).
//--
//var age = prompt("Enter your age: ");
//age = parseInt(age);
//if (age >= 0 && age <= 12)
//{
//    alert("YOU KID!!!");
//}
//else if (age > 12 && age <= 18)
//{
//    alert("You teenager!");
//}
//else if (age > 18 && age <= 60)
//{
//    alert("you grown up.");
//}
//else if (age > 60)
//{
//    alert("you old..");
//}
//else
//{
//    alert("you not alive....");
//}

// 2.
//Запросіть у користувача число від 0 до 9 і виведіть йому
//спеціальний символ, який розташований на цій клавіші
//(1–!, 2–@, 3–# тощо).
//--
//var number = prompt("Enter num from 0 to 9: ");
//number = parseInt(number);
//switch(number)
//{
//    case 0: 
//    alert(")");
//    break;
//    case 1: 
//    alert("!");
//    break;
//    case 2: 
//    alert("@");
//    break;
//    case 3: 
//    alert("#");
//    break;
//    case 4: 
//    alert("$");
//    break;
//    case 5: 
//    alert("%");
//    break;
//    case 6: 
//    alert("^");
//    break;
//    case 7: 
//    alert("&");
//    break;
//    case 8: 
//    alert("*");
//    break;
//    case 9: 
//    alert("(");
//    break;
//    default:
//        alert("Entered incorrect number.");
//}

// 3.
//Запросіть у користувача тризначне число та перевірте чи
//є в ньому однакові цифри.
//--
//var number = prompt("Enter three-digit number: ");
//number = parseInt(number);
//var digit1 = Math.floor(number / 100);
//var digit2 = Math.floor((number % 100) / 10);
//var digit3 = number % 10;
//if(digit1 === digit2 && digit2 === digit3)
//{
//    alert("In this number all digit similar.");
//}
//else
//{
//    alert("In this number digit not similar.");
//}

// 4.
//Запросіть у користувача рік та перевірте чи є він високосним. 
//Високосний рік або кратний 400, або кратний 4 і при
//цьому не кратний 100.
//--
//var year = prompt("Enter year: ");
//year = parseInt(year);
//if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
//{
//    alert(year + " leap year.");
//}
//else 
//{
//    alert(year + " not leap year.");
//}

// 5. 
//Запросіть у користувача п’ятирозрядне число і визначте,
//чи є воно паліндромом.
//var number = prompt("Enter five-digit: ");
//number = parseInt(number);
//var isPalindrome = false;
//if (number.length === 5)
//{
//    if (number[0] === number[4] && number[1] === number[3])
//    {
//        isPalindrome = true;
//    }
//}
//if (isPalindrome)
//{
//    alert(number + " is palindrome.");
//}
//else
//{
//    alert(number + " is not palindrome.");
//}

// 6.
//Напишіть конвертор валют. Користувач вводить кількість
//USD, вибирає в яку валюту хоче перекласти: EUR, UAN
//або AZN, і отримує відповідну суму.
//--
//var amountUSD = parseFloat(prompt("Enter amount USD for converting: "));
//var currency = prompt("Enter currency for converting (EUR, UAN or AZN): ").toUpperCase();
//var rate;
//if(currency === "EUR")
//{
//    rate = 0.84;
//}
//else if (currency === "UAN")
//{
//    rate = 27.40;
//}
//else if (currency === "AZN")
//{
//    rate = 1.70;
//}
//else
//{
//    alert("Incorrect currency.");
//}
//if (rate !== undefined)
//{
//    var convertedAmount = amountUSD * rate;
//    alert(amountUSD + " USD is " + convertedAmount.toFixed(2) + " " + currency);
//}

// 7.
//Запросіть у користувача суму покупки та виведіть суму до
//сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
//500 – 5%, від 500 і вище – 7%.
//--
//var purshaseAmount = prompt("Enter purshase amount: ");
//purshaseAmount = parseInt(purshaseAmount);
//var discount = 0;
//if(purshaseAmount >= 200 && purshaseAmount < 300)
//{
//    discount = 3;
//}
//else if(purshaseAmount >= 300 && purshaseAmount < 500)
//{
//    discount = 5;
//}
//else if(purshaseAmount >= 500)
//{
//    discount = 7;
//}
//var discountedAmount = purshaseAmount - (purshaseAmount * (discount / 100));
//alert("Amount for pay with discount " + discount + "%: " + discountedAmount.toFixed(2));

// 8.
//Запросіть у користувача довжину кола та периметр квадрата. 
//Визначте чи може таке коло поміститися у зазначений квадрат.
//--
//var circLength = prompt("Enter the length of the circle:");
//circLength = parseInt(circLength);
//var squarPerimeter = prompt("Enter the perimeter of the square:");
//squarPerimeter = parseInt(squarPerimeter);
//var circRadius = circLength / (2 * Math.PI);
//var squareSide = squarPerimeter / 4;
//if (circRadius <= squareSide / 2) 
//{
//    alert("This circle can fit into the specified square.");
//} 
//else 
//{
//    alert("This circle cannot fit into the specified square.");
//}

// 9.
//Задайте користувачеві 3 питання, у кожному питанні по 3
//варіанти відповіді. За кожну правильну відповідь нараховується
//2 бали. Після запитань виведіть користувачеві
//кількість набраних балів.
//--
//var score = 0;
//var answer1 = prompt("Answer 1: Human have soul?\n1. No.\n2. Yes!");
//if (answer1 === "1") 
//{
//    score += 2;
//}
//var answer2 = prompt("Answer 2: What genre of music do I listen to?\n1. Metal Black\n2. Black\n3. Black Metal");
//if (answer2 === "3") 
//{
//    score += 2;
//}
//var answer3 = prompt("Answer 3: Be Quiet and...\n1. Drive\n2. Eat\n3. Fight");
//if (answer3 === "1") 
//{
//    score += 2;
//}
//alert("Your score: " + score + " !");

// 10.
//Запросіть дату (день, місяць, рік) і виведіть наступну дату.
//Врахуйте можливість переходу на наступний місяць, рік,
//а також високосний рік.
//--
var day = parseInt(prompt("Enter day:"));
var month = parseInt(prompt("Enter month:"));
var year = parseInt(prompt("Enter year:"));
var daysInMonth;
var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
if (month === 2) 
{
    daysInMonth = isLeapYear ? 29 : 28;
}
else if (month === 4 || month === 6 || month === 9 || month === 11) 
{
    daysInMonth = 30;
} 
else 
{
    daysInMonth = 31;
}
if (day < daysInMonth) 
{
    day++;
} 
else 
{
    day = 1;
    if (month < 12) 
    {
        month++;
    } 
    else 
    {
        month = 1;
        year++;
    }
}
alert("Next Date: " + day + "." + month + "." + year);
