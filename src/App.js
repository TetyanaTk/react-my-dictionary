import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          React Dictionary Training Project
        </header>
        <main>
          <Dictionary defaultKeyword="cat" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <span class="MyName">Tetiana Tkachenko </span> - student of the course{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            SheCodes React
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/TetyanaTk/react-my-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://spiffy-cassata-a26b29.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
