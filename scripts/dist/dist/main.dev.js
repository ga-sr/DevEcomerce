"use strict";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
} // Close the dropdown menu if the user clicks outside of it


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

window.onload = function () {
  var elem = document.querySelector("[class=card-car]");
  var carlist = [];
  var price = document.createElement('h3');
  var aCar = document.createElement('a');
  var strongCar = document.createElement('h6');
  strongCar.innerText = 'Finalizar';
  aCar.appendChild(strongCar);
  aCar.classList.add('btn', 'rounded', 'dark');
  elem.appendChild(aCar);
  elem.appendChild(price);
  var requestURL = '../database/db.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  var totalValue = 0;
  var priceList = [];

  request.onload = function () {
    var categ = document.querySelector('.category-bar');
    var listaCateg = [];
    var products = request.response.products;
    var list = document.querySelector('#list');
    products.forEach(function (element) {
      if (!listaCateg.includes(element.category)) {
        var categButton = document.createElement('button');
        categButton.classList.add('buttonCateg', 'btn', 'outline', 'size');
        categButton.innerText = element.categoryLabel;
        categButton.setAttribute('categoria', element.category);
        categButton.addEventListener('click', function (e) {
          hideCat(e.target.getAttribute('categoria'));
        });
        categ.appendChild(categButton);
        listaCateg.push(element.category);
      }

      var item = document.createElement('li');
      item.classList.add('card-rounded');
      item.classList.add('cat-' + element.category);
      var div = document.createElement('div');
      div.classList.add('card-content');
      var divCategory = document.createElement('h1');
      divCategory.classList.add('category');
      divCategory.innerHTML = element.category;
      var img = document.createElement('img');
      img.classList.add('avatar-client');
      img.src = element.url;
      var pname = document.createElement('p');
      pname.classList.add('client-name');
      pname.innerText = element.name;
      var pcat = document.createElement('p');
      pcat.classList.add('client-cat');
      pcat.innerText = element.categoryLabel;
      var pcity = document.createElement('p');
      pcity.classList.add('client-city');
      pcity.innerText = element.price;
      var pdesposition = document.createElement('p');
      pdesposition.classList.add('client-desposition');
      pdesposition.innerText = element.description;
      var a = document.createElement('a');
      a.classList.add('btn', 'rounded', 'inversedot');

      a.onclick = function () {
        carlist.push(element);
        priceList.push(element.price);
        elem.classList.add('active');
        var nome = document.createElement('h5');
        nome.classList.add('bolder');
        price.classList.add('bold');
        elem.appendChild(nome);
        nome.innerText = "".concat(element.name, " ").concat(element.price);
        totalValue += element.price;
        price.innerHTML = 'Total: R$' + totalValue;
      };

      aCar.onclick = function () {
        sessionStorage.setItem('@carList', JSON.stringify(carlist));
        aCar.href = "carList.html";
      };

      var strong = document.createElement('strong');
      strong.innerText = '+';
      a.appendChild(strong);
      item.appendChild(div);
      div.appendChild(divCategory);
      div.appendChild(img);
      div.appendChild(pname);
      div.appendChild(pcat);
      div.appendChild(pcity);
      div.appendChild(pdesposition);
      div.appendChild(a);
      list.appendChild(item);
    });
  };
};

function hideCat(category) {
  var itens = document.getElementsByClassName('card-rounded');

  for (var i = 0; i < itens.length; i++) {
    if (category === false) {
      itens[i].classList.remove('hidden');
      continue;
    }

    if (!itens[i].classList.contains('cat-' + category)) {
      itens[i].classList.add('hidden');
    } else {
      itens[i].classList.remove('hidden');
    }
  }
}