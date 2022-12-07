import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { showFavFoods } from './foods.js';

//load the index.html
const htmlPath = path.join(process.cwd(), '/day03/index.html');
const htmlContent = fs.readFileSync(htmlPath).toString();

//load the DOM
const dom = new JSDOM(htmlContent);
let document = dom.window.document;

vi.stubGlobal('document', document);

beforeEach(()=>{
  //  dom.window.document.documentElement.outerHTML = htmlContent;
});

it("Meals element should not be null", ()=>{
    const mealsSection = document.querySelector('#meals');    
    const message = `For breakfast, I only like pumpkin spice latte. For lunch, I love pizza, and for supper I usually eat popcorn.`;
    showFavFoods(message);
    const mealsPara = mealsSection.firstElementChild;
    expect(mealsPara).not.toBeNull();
});


it('Should add a meals message to paragraph element within #meals',()=>{
    const mealsSection = document.querySelector('#meals');
    const message = `For breakfast, I only like pumpkin spice latte. For lunch, I love pizza, and for supper I usually eat popcorn.`
    showFavFoods(message);
    const mealsPara = mealsSection.firstElementChild;
    expect(mealsPara.textContent).toBe(message);
})