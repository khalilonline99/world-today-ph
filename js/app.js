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
            <a id="news-${alldata.category_id}" style="text-decoration: none;" class="link-dark me-2" href="https://openapi.programming-hero.com/api/news/category/${alldata.category_id}" onclick="newsIdSend(${alldata.category_id})">${alldata.category_name}</a>
        `;
        menuContainer.appendChild(menu);
        // console.log(alldata);
    }
   
        const urlTwo = `https://openapi.programming-hero.com/api/news/category/${alldata.category_id}`;
        fetch(urlTwo)
        .then(resp => resp.json())
        .then(news => neewsInCategory(news))
    
        const neewsInCategory = (news) => {

            for (newsFromCategory of news.data ){
                console.log(newsFromCategory);
                const newsContainer = document.getElementById('news-container');
                const newsDiv = document.createElement('div');
                newsDiv.classList.add("d-flex", "p-3");
                newsDiv.innerHTML = `
                <div class="card" style="max-width: 252px; min-width: 252px;"><img class="card-img-top" src="${newsFromCategory.image_url}" alt="news-image"></div>
                <div class="card-body py-3">
                <h2 class="card-title ms-3">${newsFromCategory.title}</h2>
                <p class="card-text ms-3">${newsFromCategory.details}</p>
                </div>
                `;
                newsContainer.appendChild(newsDiv);
            }
            

        }

    
    }


const newsIdSend = (idFromCategory) => {


}

