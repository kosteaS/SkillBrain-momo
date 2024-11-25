document.addEventListener("DOMContentLoaded", function () {
    // Funcție pentru generarea meniului principal
    function generateMainMenu(data) {
        const menuContainer = document.getElementById('menu-container');
        menuContainer.innerHTML = ''; // Curăță meniul existent
    
        Object.keys(data).forEach((category,index) => {
            const menuItem = document.createElement('button');
            menuItem.classList.add('menu-item');
            menuItem.textContent = `${index.toString().padStart(2, '0')} ${category.toUpperCase()}`;
            menuItem.setAttribute('data-category', category);
    
            // Adaugă eveniment de click
            menuItem.addEventListener('click', () => {
                generateContent(category, data); // Generează conținutul pentru prima subcategorie
                generateSubMenu(category, data); // Generează sub-meniul
            });
    
            menuContainer.appendChild(menuItem);
        });
    }

    
    function generateSubMenu(category, data) {
        const subMenuContainer = document.getElementById('sub-menu-container');
        subMenuContainer.innerHTML = ''; // Curăță sub-meniul existent
    
        // Obține datele categoriei
        const categoryData = data[category];
    
        // Verifică dacă datele categoriei sunt un array
        if (Array.isArray(categoryData)) {
            // Dacă e un array, generează butoane pentru fiecare subcategorie
            categoryData.forEach((item) => {
                if (item.name) { // Asigură-te că există un nume pentru subcategorie
                    const subMenuItem = document.createElement('button');
                    subMenuItem.classList.add('sub-menu-item');
                    subMenuItem.textContent = item.name.toUpperCase(); // Convertit în majuscule
    
                    // Adaugă eveniment de click
                    subMenuItem.addEventListener('click', () => {
                        generateContent(category, data, item.name); // Generează conținutul subcategoriei
                    });
    
                    subMenuContainer.appendChild(subMenuItem);
                }
            });
        } else {
            // Dacă nu e un array, afișează un mesaj
            subMenuContainer.innerHTML = '';
        }
    }

        // Funcție pentru a genera conținutul paginii în funcție de categorie și subcategorie
        function generateContent(category, data, subCategory) {
            const contentContainer = document.getElementById('content');
            contentContainer.innerHTML = ''; // Curăță conținutul existent
    
            const categoryData = data[category];
            
           // Setează background-ul paginii
           const backgroundImage = Array.isArray(categoryData) ? categoryData[0].background : categoryData.background;
           if (backgroundImage) document.body.style.backgroundImage = `url('${backgroundImage}')`;
    
        // Container pentru pagina Home
           if (category === 'home' && !Array.isArray(categoryData)) {
            // Creează div-ul principal pentru pagina Home
            const homeContainer = document.createElement('div');
            homeContainer.classList.add('home-container');
        
        
            const spaceText = document.createElement('div');
            spaceText.classList.add('home-space');
            spaceText.textContent = "Space";
        
            // Container pentru butonul Explore
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('home-button-container');
        
            const exploreButton = document.createElement('button');
            exploreButton.classList.add('home-explore-button');
            exploreButton.textContent = "Explore";
        
            // Adaugă butonul în container
            buttonContainer.appendChild(exploreButton);
        
            // Adaugă toate elementele în containerul principal
            homeContainer.appendChild(spaceText);
            homeContainer.appendChild(buttonContainer);
        
            // Adaugă containerul în pagină
            contentContainer.appendChild(homeContainer);
        }
        
        
           if (Array.isArray(categoryData)) {
            // Creează un container principal pentru toate subcategoriile
            const mainContainer = document.createElement('div');
            mainContainer.classList.add('main-container');
            
            // Găsește primul element valid (care are proprietatea 'name')
            const firstItem = subCategory 
                ? categoryData.find(item => item.name === subCategory) 
                : categoryData.find(item => item.name); // Primul element cu un 'name' valid
        
            if (firstItem) {
                // Container pentru subcategorie
                const itemElement = document.createElement('div');
                itemElement.classList.add('content-item');
        
                // Adaugă imaginea subcategoriei (dacă există)
                if (firstItem.images) {
                    const imageElement = document.createElement('div');
                    imageElement.classList.add(`${category}-image`);
                    const img = document.createElement('img');
                    img.src = firstItem.images.png;
                    img.alt = firstItem.name || "Image";
                    imageElement.appendChild(img);
                    itemElement.appendChild(imageElement);
                }
        
                // Creează un div pentru informații (titlu, descriere și detalii)
                const infoElement = document.createElement('div');
                infoElement.classList.add(`${category}-info`);
        
                // Titlu
                if (firstItem.name) {
                    const titleElement = document.createElement('div');
                    titleElement.classList.add(`${category}-name`);
                    titleElement.textContent = firstItem.name.toUpperCase(); // Convertit în majuscule
                    infoElement.appendChild(titleElement);
                }
        
                // Descriere
                if (firstItem.description) {
                    const descriptionElement = document.createElement('div');
                    descriptionElement.classList.add(`${category}-description`);
                    descriptionElement.textContent = firstItem.description;
                    infoElement.appendChild(descriptionElement);
                }
        
                // Detalii (distanță și timp de călătorie)
                if (firstItem.distance && firstItem.travel) {
                    const detailsElement = document.createElement('div');
                    detailsElement.classList.add(`${category}-details`);
        
                    const distanceText = document.createElement('p');
                    distanceText.textContent = `Distance: ${firstItem.distance}`;
                    const travelText = document.createElement('p');
                    travelText.textContent = `Travel Time: ${firstItem.travel}`;
        
                    detailsElement.appendChild(distanceText);
                    detailsElement.appendChild(travelText);
                    infoElement.appendChild(detailsElement);
                }
                // Rolul
                if (firstItem.role) {
                    const roleElement = document.createElement('div');
                    roleElement.classList.add(`${category}-role`);
                    roleElement.textContent = firstItem.role;
                    infoElement.appendChild(roleElement);
                }

                // Biografia
                if (firstItem.bio) {
                    const bioElement = document.createElement('div');
                    bioElement.classList.add(`${category}-bio`);
                    bioElement.textContent = firstItem.bio;
                    infoElement.appendChild(bioElement);
                }
                // Adaugă div-ul de informații în elementul principal
                itemElement.appendChild(infoElement);
        
                // Adaugă subcategoria în containerul principal
                mainContainer.appendChild(itemElement);
            } else {
                // Dacă nu există subcategorii disponibile
                const noDataMessage = document.createElement('p');
                noDataMessage.textContent = "No valid subcategories available.";
                mainContainer.appendChild(noDataMessage);
            }
        
            // Adaugă totul în containerul principal al paginii
            contentContainer.appendChild(mainContainer);
        } else {
            // Dacă categoria nu este un array (ex: home), afișează descrierea principală
            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add(`${category}-description`);
            descriptionElement.textContent = categoryData.description || "No description available.";
            contentContainer.appendChild(descriptionElement);
        }
    }
        // Încarcă JSON-ul cu informații
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                const menuContainer = document.getElementById('menu-container');
    
                // Adaugă evenimente de click pentru fiecare item din meniu
                menuContainer.addEventListener('click', function (event) {
                    const target = event.target;
                    if (target.classList.contains('menu-item')) {
                        const category = target.getAttribute('data-category');
                        generateContent(category, data); // Generează conținutul pentru categoria selectată
                    }
                });
    
                // La încărcarea paginii, afișează conținutul pentru prima categorie (Home)
                generateContent('home', data);
                generateMainMenu(data);
            })
            .catch(error => console.error('Eroare în încărcarea datelor:', error));
    });
    
