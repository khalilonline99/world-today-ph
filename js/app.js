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
            <a style="text-decoration: none;" class="link-dark me-2" href="https://openapi.programming-hero.com/api/news/category/${alldata.category_id}" onclick="newsIdSend(${alldata.category_id});">${alldata.category_name}</a>
        `;
        menuContainer.appendChild(menu);
        console.log(alldata);
    }
    
    const newsIdSend = (idFromCategory) => {
        const url2 = 'https://openapi.programming-hero.com/api/news/category/${idFromCategory}';
        fetch(url2)
        .then(resp => resp.json())
        .then(news => console.log(news))
    
        const newsContainer = document.getElementById('news-container');
            const news = document.createElement('div');
            news.innerHTML = `
                <div>
                <img src="image-link" alt="">
                </div>
                <div>
                <h2>Heading</h2>
                <p>paragraph here</p>
                </div>
            `;
            newsContainer.appendChild(news);
    
    
    }
}

