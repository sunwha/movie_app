import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json/sort_by=rating");
    // axios.get()이 시간이 오래걸려서 await을 삽입(await은 async func(비동기 함수)내부에서만 사용 가능)
    // await: get 주소에 접근이 끝날 때까지 기다린다

    this.setState({movies, isLoading: false});
    // this.setState({movies : movies}); key와 value 이름이 같으면 축약해서 쓸 수 있다
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state; // 오브젝트의 키값을 변수 이름으로 정의
    return <div>{isLoading ? "Loading" : movies.map(movie => (
      <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    ))}</div>;
  }
}

export default App;
