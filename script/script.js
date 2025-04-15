 const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open'); // Ajouter/retirer la classe 'open' pour afficher/masquer le menu
    });

    let currentIndex = 0;

    function moveSlide(step) {
        const images = document.querySelector('.carousel-images');
        const totalImages = images.children.length;
        currentIndex = (currentIndex + step + totalImages) % totalImages;
        const offset = -currentIndex * 100;
        images.style.transform = `translateX(${offset}%)`;
    }
    document.addEventListener('DOMContentLoaded', function () {
        const loadMoreBtn = document.querySelector('.load-more-btn');
        const productContainer = document.querySelector('.product-container');
    
        // Liste simulée de produits supplémentaires
        const additionalProducts = [
            {
                id: 5,
                name: 'Sweat à Capuche Sport',
                priceBefore: '€89.99',
                priceAfter: '€79.99',
                imgSrc: 'assets/tshirt-5.jpg',
            },
            {
                id: 6,
                name: 'Pantalon Chino',
                priceBefore: '€59.99',
                priceAfter: '€49.99',
                imgSrc: 'assets/tshirt-4.jpg',
            },
            {
                id: 7,
                name: 'Jean Slim',
                priceBefore: '€79.99',
                priceAfter: '€69.99',
                imgSrc: 'assets/tshirt-3.jpg',
            },
            {
                id: 8,
                name: 'Veste en Cuir',
                priceBefore: '€129.99',
                priceAfter: '€119.99',
                imgSrc: 'assets/tshirt-2.jpg',
            }
        ];
    
        // Fonction pour ajouter de nouveaux produits
        function loadMoreProducts() {
            additionalProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.setAttribute('data-id', product.id);
    
                productDiv.innerHTML = `
                    <img src="${product.imgSrc}" alt="Produit ${product.id}">
                    <div class="content">
                        <h3>${product.name}</h3>
                        <p><span class="line-through">${product.priceBefore}</span> ${product.priceAfter}</p>
                        <a href="card.html?id=${product.id}">
                            <button class="btn">Voir le produit</button>
                        </a>
                    </div>
                `;
    
                productContainer.appendChild(productDiv);
            });
    
            // Cache le bouton "Charger plus" après l'ajout de produits
            loadMoreBtn.style.display = 'none';
        }
    
        // Ajouter un écouteur d'événements pour le bouton "Charger plus"
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    });
    