const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//const vegetablesList = document.querySelector('#ingredients');
//const liRef = document.createElement('li');
//ingredients.forEach(item => document.querySelector('#ingredients').appendChild(document.createElement('li').textContent(`${ingredients}`)));

document.querySelector("#ingredients").innerHTML = ingredients.map(name => `<li>${name}</li>`).join('');

