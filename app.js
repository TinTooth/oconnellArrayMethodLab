
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// 

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(dish){ 
        return dish.cuisine == "Vegetarian";
    })
    return results;
}

let vegetarianFood = problemOne();
console.log("problem 1");
console.log(vegetarianFood);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){
    let results;
    cuisineType = prompt("Please choose a Cuisine Type: Vegetarian, Irish, Mexican, Vietnamese, Hungarian,  French, Italian")
    results = dishes.filter(function(dish){
        return dish.cuisine === cuisineType;
    })
    return results
}

// let probTwo = problemTwo();
// console.log("problem 2");
// console.log(probTwo);


//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){

    let results;
    results = dishes.filter(function(dish){ 
        return dish.cuisine == "Italian" && dish.servings > 5;
    
    })
    return results;
}

let probThree = problemThree();
console.log("problem 3");
console.log(probThree);


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function problemFour(){

    let results;
    results = dishes.filter(function(dish){ 
         return dish.id === dish.servings;
    })
    return results;
}

let probFour = problemFour();
console.log("problem 4");
console.log(probFour);


//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive(){
    
    let results;
    results = dishes.filter(function(dish){ 
        return dish.servings % 2 == 0;
    })
    return results;
}

let probFive = problemFive();
console.log("problem 5");
console.log(probFive);


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function problemSix(){

    let results;
    results = dishes.filter(function(dish){ 
        return (dish.ingredients.includes('chickpea'));
    })
    return results;
}

let probSix = problemSix();
console.log("problem 6");
console.log(probSix);



//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new artomray.
//Filter

function problemSeven(){
    ingredient = prompt("Which ingreient do you wish to search for?")
    let results;
    results = dishes.filter(function(dish){ 
        return dish.ingredients.includes(ingredient);
    })
    return results;
}

// let probSeven = problemSeven();
// console.log("problem 7");
// console.log(probSeven);




//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight(){
    let results
    
    results = dishes.map(function(dish){
        return dish.cuisine;
    })
    return results;
}

let probEight = problemEight();
console.log("problem 8");
console.log(probEight);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    let results;
    results = dishes.map(function(dish){
        return `${dish.cuisine} ${dish.name}`;
    })
    return results;
}

let probNine = problemNine(dishes);
console.log("problem 9");
console.log(probNine); 

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(){
    let vegDishes = dishes.filter(function(dish){return dish.cuisine == 'Vegetarian'});
    results = vegDishes.map(function(dish){return `${dish.cuisine} ${dish.name}`;})
    return results;
}

let probTen = problemTen();
console.log("problem 10");
console.log(probTen);

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.
function problemEightB(){
    let filteredCuisine = probEight.filter(function(cuisine, index, array){ 
        return array.indexOf(cuisine) == index;
    }) 
    return filteredCuisine
}

probEightB = problemEightB();
console.log("problem 8 B");
console.log(probEightB);

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    let results;
    results = dishes.filter(function(dish){
        return dish.ingredients.includes("tomato") || dish.ingredients.includes('cheese');
    })
    return results;
}
probEleven = problemEleven();
console.log("problem 11");
console.log(probEleven);


//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function problemTwelve(){
    let results;
    let serveringsizes = dishes.map(function(dish){return dish.servings});
    results = serveringsizes.reduce(function(sum,next){ return sum + next;});
    return results;

}
probTwelve = problemTwelve();
console.log("problem 12");
console.log(probTwelve);

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.


function problemThirteen(){
    let cuisines = dishes.map(function(dish){return dish.cuisine;})
    let duplicates = cuisines.filter(function(dish,index,array){return array.indexOf(dish) != index;})
    let results = dishes.filter(function(dish){return duplicates.includes(dish.cuisine) == false;})
    return results;
}

probThirteen = problemThirteen();
console.log("problem 13")
console.log(probThirteen);


