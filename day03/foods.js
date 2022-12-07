export const showFavFoods = (message) => {  
   const mealsContainerElement = document.getElementById('meals');
   const mealsMessageElement = document.createElement('p');
   mealsMessageElement.textContent = message;
   mealsContainerElement.innerHTML = '';
   mealsContainerElement.append(mealsMessageElement);

}
