import recipes from "./recipes.mjs"

function randomNumber(num) {
    const randomNum = Math.floor(Math.random() * (num))
    return randomNum
}

function selectRecipe(object) {
    const objectLength = object.length
    const randomRecipe = object[randomNumber(objectLength)]
    return randomRecipe
}

function recipeTemplate(recipe) {
	return `<div class="food-picture">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="recipe-content">
            ${tagsTemplate(recipe.tags)}
            <h1>${recipe.name}</h1>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ''

    tags.forEach(tag => {
        html += `<p class="food-type">${tag}</p>`
    })
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++)

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeElement = document.querySelector(".recipe");
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join(""); // Process all recipes
    recipeElement.innerHTML = html;
}

function init() {
  // get a random recipe
  const recipe = selectRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

const searchElement = document.getElementById("search-bar");
const searchButton = document.querySelector(".search-button");

function getSearchValue() {
    const searchValue = searchElement.value.trim().toLowerCase();
    if (!searchValue) {
        console.log("Search input is empty.");
        return;
    }
    filterRecipes(searchValue);
}

function filterRecipes(query) {
    const filteredRecipes = recipes.filter(
        a =>
            a.name.toLowerCase().includes(query) ||
            a.description.toLowerCase().includes(query) ||
            a.tags.some(tag => tag.toLowerCase().includes(query)) ||
            a.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    );
    const sortedFilteredRecipes = filteredRecipes.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    renderRecipes(sortedFilteredRecipes)
}

searchButton.addEventListener("click", getSearchValue);