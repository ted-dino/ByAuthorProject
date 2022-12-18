```js
/* build a form that takes in a name, profession, and a random color and use another function to render the input values onto cards with the background color equal to the value of the random color and the name in an h1 tag with profession below it in a h5 tag. */

var form = document.createElement('form');
form.setAttribute('id', 'form');
document.body.appendChild(form);

var name = document.createElement('input');
name.setAttribute('type', 'text');
name.setAttribute('id', 'name');
name.setAttribute('placeholder', 'Name');
form.appendChild(name);

var profession = document.createElement('input');
profession.setAttribute('type', 'text');
profession.setAttribute('id', 'profession');
profession.setAttribute('placeholder', 'Profession');
form.appendChild(profession);

var color = document.createElement('input');
color.setAttribute('type', 'text');
color.setAttribute('id', 'color');
color.setAttribute('placeholder', 'Color');
form.appendChild(color);

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('id', 'submit');
form.appendChild(submit);

var card = document.createElement('div');
card.setAttribute('id', 'card');
document.body.appendChild(card);

var h1 = document.createElement('h1');
h1.setAttribute('id', 'h1');
card.appendChild(h1);

var h5 = document.createElement('h5');
h5.setAttribute('id', 'h5');
card.appendChild(h5);

var form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var profession = document.getElementById('profession').value;
  var color = document.getElementById('color').value;
  var h1 = document.getElementById('h1');
  var h5 = document.getElementById('h5');
  var card = document.getElementById('card');
  h1.innerHTML = name;
  h5.innerHTML = profession;
  card.style.backgroundColor = color;
});


```