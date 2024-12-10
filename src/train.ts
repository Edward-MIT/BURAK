// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// masalani yechimi
function getDigits(str: string): string {
  return str
    .split('')
    .filter((char) => char >= '0' && char <= '9')
    .join('');
}

console.log(getDigits("m14i1t"));




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
