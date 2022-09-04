const url = 'https://openapi.programming-hero.com/api/news/categories';
fetch(url)
.then(resp => resp.json())
.then( data => navMenu(data.data.news_category));

const navMenu = (data) => {

    for (alldata of data) {
        const menuContainer = document.getElementById('nav-menu-container');
        const menu = document.createElement('li');
        // menu.classList.add('')
        menu.innerHTML = `
            <a id="news-${alldata.category_id}" style="text-decoration: none;" class="link-dark me-2" href="#" onclick="newsIdSend(${alldata.category_id})">${alldata.category_name}</a>
        `;
        menuContainer.appendChild(menu);
        // console.log(alldata);
    }
    
    
   
        const urlTwo = `https://openapi.programming-hero.com/api/news/category/${alldata.category_id}`;
        fetch(urlTwo)
        .then(resp => resp.json())
        .then(news => newsInCategory(news))
    
        const newsInCategory = (news) => {

            for (newsFromCategory of news.data ){
                // console.log(newsFromCategory);
                const newsContainer = document.getElementById('news-container');
                const newsDiv = document.createElement('div');
                newsDiv.classList.add("d-flex", "p-2", "bg-white", "my-2", "rounded");
                newsDiv.innerHTML = `
                <div class="card" style="max-width: 252px; min-width: 252px;"><img class="card-img-top" src="${newsFromCategory.image_url}" alt="news-image"></div>
                <div class="d-flex flex-column">
                <div class="card-body py-3">
                <h4 class="card-title ms-3">${newsFromCategory.title}</h4>
                <p class="card-text ms-3">${newsFromCategory.details.slice(0,250)}</p>
                </div>
                <div>
                <img class="rounded-circle ms-3" style="max-width: 30px; min-width: 30px;" src="${newsFromCategory.author.img}" alt="news-image">
                </div>
                </div>
                `;
                newsContainer.appendChild(newsDiv);
            }
            
            
        }
    
    }

    // on click in menu 
    const newsIdSend = (idFromCategory) => {

        const urlNewsCaterogy = `https://openapi.programming-hero.com/api/news/category/0${idFromCategory}`;
        fetch(urlNewsCaterogy)
        .then(resp => resp.json())
        .then(fromNews => newsByCategory(fromNews))
        

        const newsByCategory = (news) => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ``;
            for (getnews of news.data){
                const newsDiv = document.createElement('div');
                newsDiv.classList.add("d-flex","p-2", "bg-white", "my-2", "rounded");
                newsDiv.innerHTML = `
                <div class="card" style="max-width: 252px; min-width: 252px;"><img class="card-img-top" src="${getnews.image_url}" alt="news-image"></div>
                <div class="card-body py-3">
                <h4 class="card-title ms-3">${getnews.title}</h4>
                <p class="card-text ms-3">${getnews.details.slice(0,250)}</p>
                </div>
                `;
                newsContainer.appendChild(newsDiv);
                console.log(getnews); 
            }  
        }
                 
    
    }




