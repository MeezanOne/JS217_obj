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

const renderMovie = (key, value)=>{
    const movieSection = document.querySelector('.movie_section');
    const movieScroller = document.querySelector('.movie_scroller')
    // movieSection.innerHTML = '';
    if(movies.length === 0) {
        movieSection.classList.remove('visible');
        return
    } else{
        movieSection.classList.add('visible');
    }
    movieScroller.innerHTML = '';
    
    movies.forEach((movie) => {
        const movieEl = document.createElement('div');
        const movieHeader = document.querySelector('.movie_header');
        const movieItem = document.createElement('div')
        movieItem.className = 'movieItems'
        movieEl.className = 'moviee';

        const movieTitle = document.createElement('div');
        const movieKey = document.createElement('div');
        const movieValue = document.createElement('div');

        movieItem.textContent = `${movies.length}`
        movieTitle.textContent = movie.info.title;
        movieKey.textContent = key;
        movieValue.textContent = movie.info[key];

        movieHeader.append(movieItem)

        movieEl.append(movieTitle);
        movieEl.append(movieKey);
        movieEl.append(movieValue);

        movieScroller.append(movieEl);
    });
}

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

    // console.log(newMovie)
    movies.push(newMovie)
    console.log(movies)
    renderMovie(key,value);
    // ✅ Clear input fields properly
    titleInp.value = '';
    keyInp.value = '';
    valueInp.value = '';
}

addBtn.addEventListener('click', submitHandler);
