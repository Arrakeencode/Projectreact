import React from 'react';
import axios from 'axios';
export default class CreateUser extends React.Component{
  state = {
      nom:'',
      prenom:'',
      age:'',
      grade:'',
      adresse:'',
  }
  addUser=event => {
    const userObject={
        nom:this.state.nom,
        prenom:this.state.prenom,
        age:this.state.age,
        grade:this.state.grade,
        adresse:this.state.adresse,
    }

    let test = this.state.adresse;
    let check = this.state.grade;
    let grades = ["admin", "ingenieur", "technicien", "ouvrier", "ADMIN", "INGENIEUR", "TECHNICIEN", "OUVRIER"];
    let calc = grades.includes(check);
    let count = 0;
    let pos = test.indexOf(" ");


      while ( pos !== -1 ) {
          count++;
          pos = test.indexOf( " ",pos + 1 );
      }

    if (this.state.nom.length < 4 && this.state.prenom.length < 4){
        event.preventDefault();
        alert("nom ou prénom invalide");
    }
    else if (this.state.age.value < 21){
        event.preventDefault();
        alert("age inférieur a 21");
    }

    else if (!calc){
        event.preventDefault();
        alert("grade invalide");
    }

    else if (count < 2 || this.state.adresse.length < 21 ){
        event.preventDefault();
        alert("adresse invalide");
    }
    else {
        axios.post(`https://632c531a5568d3cad882dae9.mockapi.io/Employe/`,userObject)
            .then(res => {

                this.setState({
                    nom:'',
                    prenom:'',
                    age:'',
                    grade:'',
                    adresse:'',
                });
                console.log("user",userObject)
            })
        event.preventDefault();
        alert("ajouté avec succés");
        window.location.reload();

    }
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


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <br></br>age:<input type="number" className="form-control" value={this.state.age} name="age" onChange={this.onChange}></input>
                <br></br>Grade:<input type="text" className="form-control" value={this.state.grade} name="grade" onChange={this.onChange}></input>
                <br></br>Adresse:<input type="text" className="form-control" value={this.state.adresse} name="adresse" onChange={this.onChange}></input>
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