const searchFood = () =>{
  const searchField = document.getElementById('input-search');
  const searchText = searchField.value ;
  console.log(searchText);
  searchField.value = "";
  const  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals =>{
  const searchResult =  document.getElementById('search-result');
  
  // for(const meal of meals){
  //   console.log(meal);
  // }

  // for the same for upper and downer 

  meals.forEach (meal =>{
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title">${meal.strMeal}</h2>
              <p class="card-text">Meal Area:${meal.strArea}</p>
              <p>Catagory : ${meal.strCategory}</p>
            </div>
          </div>
    `;
    searchResult.appendChild(div);
  })
}