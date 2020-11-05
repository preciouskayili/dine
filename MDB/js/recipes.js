let form = document.querySelector('#search')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let type = document.querySelector('#type').value
    let keyword = document.querySelector('#keyword').value
    let cuisine = document.querySelector('#cuisine').value
    
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${type}&cuisine=${cuisine}&type=${keyword}&apiKey=af605a3adbbe408cbaed5942a3c13910`
    // const url = 'MDB/js/api.json'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.querySelector('#result').innerHTML = ``;
            data.forEach(food => {
                document.querySelector('#result').innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="card-img-top" src="https://spoonacular.com/recipeImages/716426-312x231.jpg" alt="">
                        <div class="card-body">
                        <h4 class="card-title">${food.name}</h4>
                        <p class="card-text">${food.cuisine}</p>
                        </div>
                    </div>
                </div>
                `
            })
            
        })
        .catch(error => {
        document.querySelector('#searchTips').innerHTML = `
            <div class="col-md-9 p-5 d-block mx-auto">
            <h5>Sorry an error occured</h5>
    
            <h5>Try:</h5>
            <ul>
                <li>Making sure you are connected to the internet</li>
                <li>Making sure you hit the search button</li>
                <li>Making sure you entered any keywords</li>
                <li>Entering the right keywords</li>
                <li>Making sure that food exist</li>
            </ul>
        </div>
        `
    })
})

document.addEventListener('load', (e) => {
    e.preventDefault()
    const recent = `https://api.spoonacular.com/recipes/apiKey=af605a3adbbe408cbaed5942a3c13910`
    // const recent = `MDB/js/api.json`
    fetch(recent)
        .then(response => {
            return response.json()
        })
        .then(data => {
            for(i=0;i<5;i++) {
                if(i < 5) {
                    document.querySelector('#recent').innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="https://spoonacular.com/recipeImages/716426-312x231.jpg" alt="">
                            <div class="card-body">
                            <h4 class="card-title">${data[i]}</h4>
                            <p class="card-text">${data[i]}</p>
                            </div>
                        </div>
                    </div>
                    `
                }
            }
        })
})