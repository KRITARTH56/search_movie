import React, {Component} from 'react';
import MovieRow from './MovieRow';
import './index.css';
import $ from "jquery";
class App extends Component
{
    constructor(props){
        super(props);
        this.state={}
        /*const movies=[
            { id:0,poster_src:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",title:"Avengers",Overview:"this is the best movie i had ever seen"},
            { id:1,poster_src:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",title:"Avengers",Overview:"this is the best movie i had ever seen"}];
            var movieRows=[];
            movies.forEach((movie)=>{
                console.log(movie.Overview);
                const movieRow=<MovieRow movie={movie}/>
                movieRows.push(movieRow);
            })
            this.state={rows:movieRows}*/
            this.performSearch("avengers");
    }
        performSearch(searchTerm){
            const urlString="https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;
            $.ajax({
                url:urlString,
                success:(searchResults)=>{
                    const results=searchResults.results;
                    var movieRows=[]
                    results.forEach((movie)=>{
                        movie.poster_src="https://image.tmdb.org/t/p/w185" + movie.poster_path
                        movie.rating=movie.vote_average
                        movie.popular=movie.popularity
                        movie.lang=movie.original_language
                        movie.releasedate=movie.release_date
                        movie.count=movie.vote_count
                        movie.result=movie.origin_country
                        console.log(movie.poster_path);
                        const movieRow=<MovieRow key={movie.id} movie={movie}/>
                        movieRows.push(movieRow);
                    });
                    this.setState({rows:movieRows});
                },

            })
        }
        searchChangeHandler(event){
            const boundObject=this
            const searchTerm=event.target.value
            boundObject.performSearch(searchTerm)
        }
    render(){
        return(
            <>
             <div className="App">
                 <div className="ting">
                    <img alt="my pic" className="img" width='50' height='50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlZEfieWR2cXzrpmOpKphcAYN4PXIDy3fEg&usqp=CAU"/>
                     <h1 className="h1"> Movie Review</h1>
                      </div>
            
            
            <div class="champ">
                <input type="text" className="search" placeholder="Search Movie" onChange={this.searchChangeHandler.bind(this )} />           
                 {this.state.rows}       
            </div>
            </div>
            </>
        );
    }

}

export default App;
