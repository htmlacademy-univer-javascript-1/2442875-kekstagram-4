

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
