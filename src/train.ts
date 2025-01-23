// task U

function sumOdds(number: number): number {
  let count = 0;
  for (let i = 1; i < number; i += 2) {
      count++;
  }
  return count;
}

console.log(sumOdds(9));  // 4





// task T


// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// // Test
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));




// MIT Task S

// function missingNumber(arr: number[]): number {
//   const n: number = arr.length; //
//   const expectedSum: number = (n * (n + 1)) / 2;
//   const actualSum: number = arr.reduce((a, b) => a + b, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1]));





// MIT task R
/*

function calculate(input: string): number {
  return eval(input);
}

console.log(calculate("1 + 3"));







function hasProperty(obj: Record<string, any>, propName: string): boolean {
  return obj.hasOwnProperty(propName);
}

// Misollar:
console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));





function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj);
}

console.log(objectToArray({a: 10, b: 20}));





function calculateSumOfNumbers(arr: any[]): number {
  let sum: number = 0;


  arr.forEach((item: any) => {
    if (typeof item === 'number') {
      sum += item;
    }
  });

  return sum;
}
console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // 45





*/


/*
TASK-N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;




function palindromCheck(str: string): boolean {
  const teskari: string = str.split('').reverse().join('');
  return str === teskari;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false



*/


/*

TASK M:

Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];




function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
  // Har bir element uchun object yaratamiz
  return numbers.map((number: number) => ({
    number: number,          // Asl raqam
    square: number * number // Kvadrati
  }));
}

// Funksiyani sinab ko'ramiz
const result = getSquareNumbers([1, 2, 3]);
console.log(result);



*/



/*

TASK L:

So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda




function reverseSentence(str: string): string {
  const words = str.split(/(\s+)/);

  const reversedWords = words.map((word: string) => {
    return word.split('').reverse().join('');
  });

  return reversedWords.join('');
}

console.log(reverseSentence("we like coding!"));

*/

// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

/*

function countVowels(str: string): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let count: number = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("string")); // 1
*/




// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(str: string): string {

//   const words: string[] = str.split(" ");
//   let longestWord: string = "";

//   for (let word of words) {
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("I came from Uzbekistan!"));


// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// yechilishi



// function majorityElement(arr: number[]): number {
//   let maxElement: number = arr[0];
//   let maxCount: number = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let count: number = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));




// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// masalani yechimi


// function getDigits(str: string): string {
//   return str
//     .split('')
//     .filter((char) => char >= '0' && char <= '9')
//     .join('');
// }

// console.log(getDigits("m14i1t"));




// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// yasalani yechimi

// function getPositive(arr: number[]): string {
//   return arr
//     .filter((num) => num > 0)
//     .join('');
// }
// console.log(getPositive([1, -3, 5]));






// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

//  Misol yechilishi

// function getHighestIndex(arr: number[]): number {
//   let max = Math.max(...arr);
//   return arr.indexOf(max);
// }

// // Misol:
// console.log(getHighestIndex([5, 21, 12, 21, 8]));
