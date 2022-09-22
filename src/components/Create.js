import React from 'react';
import axios from 'axios';
export default class Create extends React.Component{
  state = {
  nom:'',
  prenom:'',
  email:'',
  password:'',

  }
  addUser=event => {
    const userObject={
        nom:this.state.nom,
        prenom:this.state.prenom,
        email:this.state.email,
        password:this.state.password,

    }
    
    axios.post(`https://632c23401aabd83739943ca8.mockapi.io/utilisateurs/`,userObject)
    .then(res => {
    
    this.setState({ 
         nom:'',
  prenom:'',
  email:'',
  password:'',
 });
    console.log("user",userObject)
    })
    event.preventDefault();
    alert("ajouté avec succés");
    window.location.reload();
    }
    onChange= e=> {
        this.setState({ [e.target.name] :e.target.value});
    };
    render() {
      return(
        <>
        
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter Utilisateur
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Ajout d'utilisateur</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form method="post" onSubmit={this.addUser}>
               
                Nom:<input className="form-control" type="text" value={this.state.nom} onChange={this.onChange} name="nom"></input>
                <br></br>Prenom:<input type="text" className="form-control" value={this.state.prenom} name="prenom" onChange={this.onChange}></input>
                <br></br>email:<input type="email" className="form-control" value={this.state.email} name="email" onChange={this.onChange}></input>
                <br></br>Mot de passe:<input type="password" className="form-control" value={this.state.password} name="password" onChange={this.onChange}></input>
                <br></br><button className='btn btn-primary' type="submit" >Ajouter</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        
      </div>
    </div>
  </div>
</div>

        </>
      )
    };
}