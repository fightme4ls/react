import NavigationBar from "../components/navigationBar";
import "./css/styles.css";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <h1 className="heading">Home</h1>
      <p>
        Check out my Github o7
      </p>
      <a class = "button" href = "https://github.com/fightme4ls"> Github  </a>

      <footer>
        <h5>Credits to Aryan Parwal</h5>
        <em>&copy; 2023 All Rights Reserved</em>
      </footer>
    </>
  );
}