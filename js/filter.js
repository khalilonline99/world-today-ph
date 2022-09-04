

const todaysPick = () => {

    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(resp => resp.json())
    .then( data => todaysPickSelection(data.data));

    const todaysPickSelection = (datas) => {
        
        const newsCategory = datas.news_category
        for (data of newsCategory) {

            console.log(data)
        }
        
    }

    // const newsContainer = document.getElementById('news-container');

}