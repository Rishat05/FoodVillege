function Menu(e) {

    let list = document.querySelector('ul');
    e.name === 'menu' ?
        (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100'), list.classList.add('bg-red-400'))
        :
        (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'), list.classList.remove('bg-red-400'))
}


const allDishes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res => res.json())
        .then(data => displayAllDishes(data.categories));
}

const breakfast = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
        .then(res => res.json())
        .then(data => displayBreakfast(data.meals));
}
const Vegetarian = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
        .then(res => res.json())
        .then(data => displayBreakfast(data.meals));
}

const displayAllDishes = meals => {
    const parentDiv = document.getElementById('showDishes');
    parentDiv.innerHTML = '';
    for (const item of meals) {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('px-6');
        div.classList.add('py-3');
        div.classList.add('shadow');
        div.innerHTML = `<img src='${item.strCategoryThumb} '>
         <p class='text-4xl py-2'>${item.strCategory}</p>
         <p>${item.strCategoryDescription.slice(0, 130)}...</p>`;
        parentDiv.appendChild(div);
    }
}

const displayBreakfast = meals => {
    const parentDiv = document.getElementById('showDishes');
    parentDiv.innerHTML = '';
    for (const item of meals) {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('px-6');
        div.classList.add('py-3');
        div.classList.add('shadow');
        div.innerHTML = `<img class='w-3/4 h-3/4 mx-auto' src='${item.strMealThumb} '>
         <p class='text-2xl py-4 px-6 font-bold'>${item.strMeal}</p>`;
        parentDiv.appendChild(div);
    }
}




