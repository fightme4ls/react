import { useEffect, useState } from "react";
import NavigationBar from "../components/navigationBar";
import "./css/styles.css";

function App(){
const [Fact, setFact] = useState("");

if(!isDataLoaded){
    return(
      <div>
        <h1> Loading... </h1>
      </div>
    )
}

const fetchFact = () => {
  fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
  .then((data) => {
      setFact(data.value);
    });
}
useEffect(() => {
  fetchFact();
}, []);

  return(
    <>
    <NavigationBar />
    <div className = "App">
      <button onClick={fetchFact} class = "generate"> Generate Chuck Norris Fact</button>
      <p>{Fact}</p>
    </div>
    </>
  )
}

export default App;