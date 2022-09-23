import CreateUser from "../components/createUser";
import ReadUser from "../components/readUser";
import './App.css';

const Users = () => {
    return  <div className="App">
        <CreateUser></CreateUser>
        <ReadUser></ReadUser>
    </div>
        ;
};
export default Users;
