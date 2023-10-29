

const lenString = (charset, length) => (charset.length <= length);
const ifPalindrom = (charset) =>
{

  charset = charset.replaceAll(' ','');
  const temp = charset.toLowerCase();
  let answ = '';
  for(let i = temp.length-1;i > 0;i--)
  {
    answ+=temp.at(i);
  }
  return (answ===temp);
};

const onlyNumbers = (charset) =>
{
  let answ = '';
  for(let i = 0;i < charset.length;i++)
  {
    const num = parseInt(charset.at(i), 10);
    if (!isNaN(num))
    {
      answ+=charset.at(i);
    }
  }
  if (!answ)
  {
    answ = NaN;
  }
  return answ;
};

// Cтрока короче 20 символов
lenString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
lenString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
lenString('проверяемая строка', 10); // false

// Строка является палиндромом
ifPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
ifPalindrom('ДовОд'); // true
// Это не палиндром
ifPalindrom('Кекс');  // false
ifPalindrom('Лёша на полке клопа нашёл '); // true


onlyNumbers('2023 год');            // 2023
onlyNumbers('ECMAScript 2022');     // 2022
onlyNumbers('1 кефир, 0.5 батона'); // 105
onlyNumbers('агент 007');           // 7
onlyNumbers('а я томат');           // NaN
onlyNumbers(2023); // 2023
onlyNumbers(-1);   // 1
onlyNumbers(1.5);  // 15
