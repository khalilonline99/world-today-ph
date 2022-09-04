

const todaysPick = () => {

    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(resp => resp.json())
    .then( data => todaysPickSelection(data.data));

    const todaysPickSelection = (datas) => {
        
        const newsCategory = datas.news_category

        for (data of newsCategory) {
            fetch(`https://openapi.programming-hero.com/api/news/category/${data.category_id}`)
            .then(resp => resp.json())
            .then(news => pickedNews(news))
            // .then(news => newsInCategory(news))

            const pickedNews = news => {

                for (allNews of news.data){
                    console.log(allNews.others_info);

                }
            }
        }
        
    }

    // const newsContainer = document.getElementById('news-container');

}