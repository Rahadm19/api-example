const searchFood = () =>{
  const searchField = document.getElementById('input-search');
  const searchText = searchField.value ;
  // console.log(searchText);
  searchField.value = "";
  const  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals =>{
  const searchResult =  document.getElementById('search-result');
  searchResult.textContent= "";
  
  // for(const meal of meals){
  //   console.log(meal);
  // }

  // for the same for upper and downer 

  meals.forEach (meal =>{
    // console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick = "loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title">${meal.strMeal}</h2>
              <p class="card-text">Meal Area:${meal.strArea}</p>
              <p>Catagory : ${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
    `;
    searchResult.appendChild(div);
  })
}

const loadMealDetails = mealId =>{
  // console.log(mealId);
   const url = `
          https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
  `;
  fetch(url)
    .then(res => res.json())
    .then ( data =>displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal =>{
  const detailsField = document.getElementById ('details-field');
  detailsField.textContent = '';
  const div = document.createElement('div');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h1 class="card-title">${meal.strMeal}</h1>
      <p class="card-text">Details :  ${meal.strInstructions.slice(0,200)}</p>
      
  `;
  detailsField.appendChild(div);
}