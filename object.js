// const person = {
//     name: "Meezan",
//     age: 20,
//     hobbies: ['Chess', 'Development'],
//     greet: ()=>{
//         console.log(`Hi ${person.name}`);
//     }
// }

// person.name = 'Arshlan'
// person.age = 18
// person.hobbies = ['Motor Vlogging', 'Gym']
// person.greet();
// delete person.greet

// console.log(person)


const addBtn = document.getElementById('add-btn');
let movies = []

const renderMovie = (filterContent) => {
    const movieSection = document.querySelector('.movie_section');
    const movieScroller = document.querySelector('.movie_scroller');

    if (movies.length === 0) {
        movieSection.classList.remove('visible');
        return; 
    } else {
        movieSection.classList.add('visible');
    }

    movieScroller.innerHTML = '';

    const filteredMovies = !filterContent 
        ? movies 
        : movies.filter(movie => 
            movie.info.title.toLowerCase().includes(filterContent.toLowerCase()) // Case-insensitive filter
        );

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('div');
        const movieHeader = document.querySelector('.movie_header');
        const movieItem = document.createElement('div');
        movieItem.className = 'movieItems';
        movieEl.className = 'moviee';

        const movieTitle = document.createElement('div');
        const movieKeyValue = document.createElement('div');

        movieItem.textContent = `${movies.length}`;
        let text = ``;
        for (const key in movie.info) {
            if (key !== 'title') {
                text = `${key}: ${movie.info[key]}`;
            }
        }

        movieTitle.textContent = movie.info.title;
        movieKeyValue.textContent = text;

        movieHeader.append(movieItem);
        movieEl.append(movieTitle);
        movieEl.append(movieKeyValue);

        movieScroller.append(movieEl);
    });
};

const searchField = document.getElementById("filter_search");

searchField.addEventListener("input", (event) => {
    renderMovie(event.target.value);
});


const submitHandler = (event) => {
    event.preventDefault(); 

    let titleInp = document.getElementById('title-inp');
    let keyInp = document.getElementById('key-inp');
    let valueInp = document.getElementById('value-inp');

    let title = titleInp.value.trim();
    let key = keyInp.value.trim();
    let value = valueInp.value.trim();

    if (title === '' || key === '' || value === '') {
        return alert('Please Enter Valid Info');
    }
    const newMovie = {
        info:{
            title,
            [key]:value
        },
        id: Math.floor(100000 + Math.random() * 900000)
    }

    movies.push(newMovie)
    console.log(movies)
    renderMovie();
     
    titleInp.value = '';
    keyInp.value = '';
    valueInp.value = '';
}

addBtn.addEventListener('click', submitHandler);