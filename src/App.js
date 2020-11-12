import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // axios.get()이 시간이 오래걸려서 await을 삽입(await은 async func(비동기 함수)내부에서만 사용 가능)
    // await: get 주소에 접근이 끝날 때까지 기다린다
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state; // 오브젝트의 키값을 변수 이름으로 정의
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
