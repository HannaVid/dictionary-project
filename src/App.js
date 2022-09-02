import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center mt-3">
        <header className="App-header">
          <h1>Dictionary</h1>
          <p>What word would you like to look up?👀</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Hanna Vidieniova</footer>
      </div>
    </div>
  );
}
