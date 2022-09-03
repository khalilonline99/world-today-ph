const url = 'https://openapi.programming-hero.com/api/news/categories';
fetch(url)
.then(resp => resp.json())
.then( data => navMenu(data.data.news_category));

const navMenu = (data) => {
    for (alldata of data) {
        const menuContainer = document.getElementById('nav-menu-container');
        const menu = document.createElement('li');
        menu.innerHTML = `
            <a href="#">${alldata.category_name}</a>
        `;
        menuContainer.appendChild(menu);
        // console.log(alldata.category_name);
    }
}