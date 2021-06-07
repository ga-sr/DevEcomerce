window.onload = function() {
    let dados = sessionStorage.getItem('data');
    //console.log(dados, 'dados');
    let list = document.querySelector('#list ');
    //console.log(list);
    var dadosT = JSON.parse(dados);
    //console.log(dadosT, 'dadosT');
    let total = 0;
    dadosT.forEach((element) => {
        const item = document.createElement('li');
        item.classList.add('card-rounded', 'small');

        const div = document.createElement('div');
        div.classList.add('card-content', 'small');

        const divCategory = document.createElement('h1');
        divCategory.classList.add('category', 'small');
        divCategory.innerHTML = element.category;

        const img = document.createElement('img');
        img.classList.add('avatar-client', 'small');
        img.src = element.url;

        const pname = document.createElement('p');
        pname.classList.add('client-name', 'small');
        pname.innerText = element.name;

        const pcat = document.createElement('p');
        pcat.classList.add('client-cat');
        pcat.innerText = element.categoryLabel;

        const pcity = document.createElement('p');
        pcity.classList.add('client-city', 'small');
        pcity.innerText = element.price;
        total+= element.price;

        const pdesposition = document.createElement('p');
        pdesposition.classList.add('client-desposition', 'small');
        pdesposition.innerText = element.description;

        item.appendChild(div);
        div.appendChild(divCategory);
        div.appendChild(img);
        div.appendChild(pname);
        div.appendChild(pcat);
        div.appendChild(pcity);
        div.appendChild(pdesposition);

        list.appendChild(item);
    })
    let teste = document.getElementById('entrega');
    console.log(teste);
    let params = new URLSearchParams(location.search);
    
    const nome = document.createElement('h4');
    nome.innerText = 'NOME: '+params.get('name');
    teste.appendChild(nome);

    const cpf = document.createElement('h3');
    cpf.innerText = 'CPF: '+params.get('cpf');
    teste.appendChild(cpf);

    const cep = document.createElement('h3');
    cep.innerText = 'CEP: '+params.get('cep');
    teste.appendChild(cep);

    const address = document.createElement('h3');
    address.innerText = 'ADDRESS: Rua '+params.get('address');
    teste.appendChild(address);
    
    const frete = document.createElement('h3');
    frete.innerText = 'TEMPO DE ENTREGA: '+getRandom(1,15)+' dia(s)';
    teste.appendChild(frete);

    const preco = document.createElement('h3');
    preco.innerText = 'PREÇO: R$ '+total;
    teste.appendChild(preco);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}