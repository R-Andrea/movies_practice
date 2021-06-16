// function addMovies(movieTitle, movieYear, isOlder) {

//     if (movieYear >=2000) {
        
//     }

//     return `
//     <section class="movie">
//         <h2>${movieTitle}</h2>
//         <h3>${movieYear}</h3>
//         <h4>${isOlder}<h4>
//     </section> 
//     `

//     // for (const movie of movies) {

//     //     let sectionElement = document.createElement("section");
//     //     sectionElement.classList.add("movie");
//     //     sectionElement.innerHTML = `<h2>${movie.title}</h2>`;
 
//     //     rootElement.appendChild(sectionElement);
//     // }
// }

// function addMovies(movieTitle, movieYear) {

//     let isNewer = "This movie is older than 2000";

//     if (movieYear >= 2000 ) {

//         isNewer = "This movie is newer than 2000."

//     };

//     return `
//     <section class="movie">
//         <h2>${movieTitle}</h2>
//         <h3>${movieYear}</h3>
//         <h4>${isNewer}<h4>
//     </section> 
//     `
// };

//alapbeallitas az, hogy hiba, valtozoban adjuk meg, hogy mi adja be
function addMovies(movieTitle, movieYear) {

    let toReturn = "Error"

    if (typeof movieYear === "number" &&& typeof movieTitle === "string" ) {

       toReturn = `
        <section class="movie">
            <h2>${movieTitle}</h2>
            <h3>${movieYear}</h3>
        </section> 
        `
    };

    return toReturn;
};

function logMovieTitle(movieTitle) {

    console.log(movieTitle)

};

function logMovieObject(movieObject) {
    
    console.log(movieObject);
    console.log(movieObject.title);

};

function loadEvent() {

    const rootElement = document.getElementById("root");
    //console.log(rootElement);



    // let a=5;
    
    // console.log(movies[0].title);  
    // console.log(movies[1].title);  
    // console.log(movies[movies.length-1].title);  // get the title of last movie
    // console.log(movies[a].title);

    for (const movie of movies) {     
        
        // console.log(movie);
        // console.log(movies);
    
        // console.log(movie.title) 
        // if (movie.year >= 2000) {

        //    // console.log(movie.title, movie.year)
        //    rootElement.insertAdjacentHTML("beforeend", addMovies(movie.title, movie.year, "This movie is newer than 2000"))

        // } else {

        //     rootElement.insertAdjacentHTML("beforeend", addMovies(movie.title, movie.year, "This movie is older than 2000"))

        // };


    logMovieTitle(movie.title);
    logMovieObject(movie);
    rootElement.insertAdjacentHTML("beforeend", addMovies(movie.title, movie.year))
    
    };

    // for (let i=0; i<movies.length; i++) {
    
    //     let movie = movies[i];
    //     console.log(i);
    //     console.log(movie.title)
    
    // };


    //console.log(rootElement)
    //addMovies()
};

window.addEventListener("load", loadEvent);