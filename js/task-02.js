const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul");

const Potatoes = document.createElement("li");
Potatoes.classList.add('item');
Potatoes.textContent = "Potatoes";
list.append(Potatoes);

const Mushrooms = document.createElement("li");
Mushrooms.classList.add('item');
Mushrooms.textContent = "Mushrooms";
list.append(Mushrooms);

const Garlic = document.createElement("li");
Garlic.classList.add('item');
Garlic.textContent = "Garlic";
list.append(Garlic);

const Tomatos = document.createElement("li");
Tomatos.classList.add('item');
Tomatos.textContent = "Tomatos";
list.append(Tomatos);

const Herbs = document.createElement("li");
Herbs.classList.add('item');
Herbs.textContent = "Herbs";
list.append(Herbs);

const Condiments = document.createElement("li");
Condiments.classList.add('item');
Condiments.textContent = "Condiments";
list.append(Condiments);
