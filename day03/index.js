import { showFavFoods } from "./foods.js";
const faveFoods = {
    breakfast: 'Coffee ☕ and pancakes 🥞',
    lunch: 'Sandwiches 🥙',
    supper: 'Salad 🥗 and pizza 🍕'
}
let {breakfast, lunch, supper} = faveFoods;
if (breakfast && lunch && supper) {
    let message = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I usually eat ${supper}.`; 
    showFavFoods(message);
}