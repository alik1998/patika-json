const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

//Bu ifade, bir üçlü (ternary) operatör kullanılarak `itemsArray` değişkeninin değerini belirler. İfadenin ayrıntılı açıklaması şu şekildedir:

// 1. `localStorage.getItem('items')`: Tarayıcının yerel depolama alanından "items" adlı bir anahtarın değerini getirir. Eğer "items" adında bir anahtar yoksa, bu ifade `null` değerini döndürür.

// 2. `JSON.parse(localStorage.getItem('items'))`: Eğer "items" adlı anahtar varsa, bu ifade, "items" anahtarının değerini bir JSON dizisi olarak alır ve bu diziyi JavaScript dizisine dönüştürür. Eğer "items" adında bir anahtar yoksa veya değeri bir JSON dizisi değilse, bu ifade hata verebilir.

// 3. `?` operatörü: Bir üçlü (ternary) operatör kullanarak bir koşulu değerlendirir. Eğer `localStorage.getItem('items')` ifadesi `null` değilse (yani "items" adında bir anahtar varsa), koşul doğru kabul edilir ve `JSON.parse(localStorage.getItem('items'))` ifadesi değeri kullanılır. Eğer `localStorage.getItem('items')` ifadesi `null` ise (yani "items" adında bir anahtar yoksa), koşul yanlış kabul edilir.

// 4. `:` operatörü: Bir üçlü (ternary) operatörün ikinci kısmında kullanılır. Eğer koşul yanlışsa (yani `localStorage.getItem('items')` ifadesi `null` ise), bu kısım çalışır. Bu durumda, `itemsArray` değişkeni boş bir diziyle başlatılır.

// Sonuç olarak, bu ifade "items" adlı bir anahtarın değerini tarayıcının yerel depolama alanından alır. Eğer anahtar varsa ve değeri bir JSON dizisiyse, bu değeri JavaScript dizisine dönüştürerek `itemsArray` değişkenine atar. Eğer anahtar yoksa veya değeri bir JSON dizisi değilse, `itemsArray` değişkeni boş bir diziyle başlatılır.

