const paintings = [
    {
        img: "./assets/images/catalog/item-6.jpeg",
        title: "Landscape with Fish",
        artist: "Pierre Morange",
        material: "Color lithography (50x80)",
        price: "20,000 UAH",
        category: "France",
    },
    {
        img: "./assets/images/catalog/item-5.jpeg",
        title: "Bird's Feast",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "22,500 UAH",
        category: "France",
    },
    {
        img: "./assets/images/catalog/item-4.jpeg",
        title: "Rose",
        artist: "Louis Detouche",
        material: "Paper, acrylic (50x80)",
        price: "12,000 UAH",
        category: "France",
    },
    {
        img: "./assets/images/catalog/item-3.jpeg",
        title: "Procedure",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "20,000 UAH",
        category: "France",
    },
    {
        img: "./assets/images/catalog/item-2.jpeg",
        title: "Lady with a Dog",
        artist: "Henri Selin",
        material: "Acrylic, paper (50x80)",
        price: "16,500 UAH",
        category: "France",
    },
    {
        img: "./assets/images/catalog/item-1.jpeg",
        title: "Cupid's Hunt",
        artist: "Marcel Russo",
        material: "Canvas, oil (50x80)",
        price: "14,500 UAH",
        category: "France",
    },
        {
        img: "./assets/images/catalog/item-1.jpeg",
        title: "Cupid's Hunt",
        artist: "Marcel Russo",
        material: "Canvas, oil (50x80)",
        price: "14,500 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-2.jpeg",
        title: "Lady with a Dog",
        artist: "Henri Selin",
        material: "Acrylic, paper (50x80)",
        price: "16,500 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-3.jpeg",
        title: "Procedure",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "20,000 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-4.jpeg",
        title: "Rose",
        artist: "Louis Detouche",
        material: "Paper, acrylic (50x80)",
        price: "12,000 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-5.jpeg",
        title: "Bird's Feast",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "22,500 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-6.jpeg",
        title: "Landscape with Fish",
        artist: "Pierre Morange",
        material: "Color lithography (50x80)",
        price: "20,000 UAH",
        category: "Germany",
    },
        {
        img: "./assets/images/catalog/item-6.jpeg",
        title: "Landscape with Fish",
        artist: "Pierre Morange",
        material: "Color lithography (50x80)",
        price: "20,000 UAH",
        category: "England",
    },
    {
        img: "./assets/images/catalog/item-5.jpeg",
        title: "Bird's Feast",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "22,500 UAH",
        category: "England",
    },
    {
        img: "./assets/images/catalog/item-4.jpeg",
        title: "Rose",
        artist: "Louis Detouche",
        material: "Paper, acrylic (50x80)",
        price: "12,000 UAH",
        category: "England",
    },
     {
        img: "./assets/images/catalog/item-1.jpeg",
        title: "Cupid's Hunt",
        artist: "Marcel Russo",
        material: "Canvas, oil (50x80)",
        price: "14,500 UAH",
        category: "England",
    },
        {
        img: "./assets/images/catalog/item-2.jpeg",
        title: "Lady with a Dog",
        artist: "Henri Selin",
        material: "Acrylic, paper (50x80)",
        price: "16,500 UAH",
        category: "England",
    },
        {
        img: "./assets/images/catalog/item-3.jpeg",
        title: "Procedure",
        artist: "François Dupont",
        material: "Color lithography (40x60)",
        price: "20,000 UAH",
        category: "England",
    },
    
];

const buttons=document.querySelectorAll('.btn-tab');
const catalog=document.querySelector('.catalog-list');
const productsButton = document.querySelector('.btn-link');
const catalogWrapper = document.querySelector('.catalog-wrapper')

function displayPainting(category){
    catalog.innerHTML= '';

    const filteredPainting = paintings.filter(painting => painting.category === category);

    filteredPainting.forEach(painting => {
        const card = document.createElement('div');
        card.classList.add('catalog-item');
        card.innerHTML = `
            <div class="wrapp-img">
                <img src="${painting.img}" alt="${painting.title}">
            </div>
            <p class="artist">${painting.artist}</p>
            <p class="title">${painting.title}</p>
            <p class="material">${painting.material}</p>
            <p class="price">${painting.price}</p>
            <button class="btn">Add to Cart</button>
        `;
        catalog.appendChild(card);
    });
}

function scrollToCatalog() {
    catalogWrapper.scrollIntoView({behavior: 'smooth'});
}

buttons.forEach(button => {
    button.addEventListener('click',() => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.textContent;
        displayPainting(category);
    });
});

if (productsButton) {
    productsButton.addEventListener('click', () => {
        scrollToCatalog();
        displayPainting('France');
        buttons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.btn-tab').classList.add('active');
    });
}

displayPainting('France');


