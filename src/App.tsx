import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  genericRowMapper,
  TableWithPagination,
} from "./app/shared/components/Table";

interface DataItem {
  id: number;
  name: string;
  description: string;
}

const data: DataItem[] = [
  { id: 1, name: "Toto", description: "salut, ça va" },
  { id: 2, name: "Tata", description: "ouais ça va trop bien" },
  { id: 3, name: "Titi", description: "ouais ça va trop bien" },
  { id: 4, name: "Tutu", description: "ouais ça va trop bien" },
  { id: 5, name: "Tete", description: "ouais ça va trop bien" },
  { id: 6, name: "Tyty", description: "ouais ça va trop bien" },
  { id: 7, name: "Prout", description: "ouais ça va trop bien" },
  { id: 8, name: "Chibre", description: "ouais ça va trop bien" },
  { id: 9, name: "Caca", description: "ouais ça va trop bien" },
  { id: 10, name: "Lol", description: "ouais ça va trop bien" },
];

const rowMapper = genericRowMapper<DataItem>("id", "id", "name", "description");
const columnsNames = ["Identifiant", "Nom", "Description"];

function App() {
  return (
    <div className="App">
      <TableWithPagination data={data} rowMapper={rowMapper} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
