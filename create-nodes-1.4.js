const ul = document.createElement('ul');
const li = document.createElement('li');

li.textContent = 'Привет мир';

ul.classList.add('list');

ul.append(li);
document.body.append(ul)
console.log(ul);