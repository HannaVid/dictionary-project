import "./App.css";
import Dictionary from "./Dictionary";
import Netlify from "./images/Netlify.svg";
import Github from "./images/Github.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
          <p>What word would you like to look up?👀</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/HannaVid/dictionary-project"
            target="_blanket"
            title="See open-sourced code of the Project on Github"
          >
            <img src={Github} alt="Github icon"></img>
          </a>
          <a
            href="https://tangerine-flan-9c7330.netlify.app"
            target="_blanket"
            title="The Project is hosted on Netlify"
          >
            <img src={Netlify} alt="Netlify icon"></img>
          </a>
          | DESIGNED & Built by Hanna Vidieniova
        </footer>
      </div>
    </div>
  );
}
