import React from 'react';
import axios from 'axios';
export default class ReadUser extends React.Component{
  state = {
  users: []
  }
  componentDidMount() {
    axios.get(`https://632c531a5568d3cad882dae9.mockapi.io/Employe/`)
    .then(res => {
    const users = res.data;
    this.setState({ users });
    //console.log("user",users)
    })
    }
    deleteRow(id, e){
      
      axios.delete(`https://632c531a5568d3cad882dae9.mockapi.io/Employe/${id}`)
      .then(res => {
      console.log(res);
      console.log(res.data);
      const users = this.state.users.filter(item => item.id !== id);
      this.setState({ users });
      })
      }
    render() {
      return(
        <>
        <h2 className="text-center">Employé</h2>
        <table className="table table-bordered">
<thead>
<tr>
  <th>ID</th>
  <th>Nom</th>
  <th>Prenom</th>
  <th>Age</th>
  <th>Grade</th>
  <th>Adresse</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
{this.state.users.map((user) => (
<tr>
  <td>{user.id}</td>
  <td>{user.nom}</td>
  <td>{user.prenom}</td>
  <td>{user.age}</td>
  <td>{user.grade}</td>
  <td>{user.adresse}</td>
  <td>
    <button className="btn btn-danger" onClick={(e) => this.deleteRow(user.id, e)}>Delete</button>
  </td>
</tr>
))}
</tbody>
</table>
        </>
      )
    };
}