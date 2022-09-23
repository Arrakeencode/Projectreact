import CreateSalaire from "../components/createSalaire";
import ReadSalaire from "../components/readSalaire";
import './App.css';

const Salaire = () => {
    return  <div className="App">
        <CreateSalaire></CreateSalaire>
        <ReadSalaire></ReadSalaire>
    </div>
        ;
};
export default Salaire;
