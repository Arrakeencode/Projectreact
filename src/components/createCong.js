import React from 'react';
import axios from 'axios';
export default class CreateCong extends React.Component{
    state = {
        id_emp:'',
        duree:'',
        type:'',
        debut:'',
        cause:'',
    }
    addUser=event => {
        const congObject={
            id_emp:this.state.id_emp,
            duree:this.state.duree,
            type:this.state.type,
            debut:this.state.debut,
            cause:this.state.cause,
        }
        const rest = 10;
        let check = this.state.type;
        let types = ["repos", "maladie", "urgent", "longue durée"];
        let calc = types.includes(check);

        if (this.state.duree < 1){
            event.preventDefault();
            alert("durée invalide");
        }
        else if (!calc){
            event.preventDefault();
            alert("type invalide");
        }
        else if (check !== 'repos' && this.state.cause === '' ){
            event.preventDefault();
            alert("mettez une cause merci");
        }
        else if (check === 'repos' && this.state.duree > rest ){
            event.preventDefault();
            alert("la durée est supérieur au reste");
        }
        else {
            axios.post(`https://632c531a5568d3cad882dae9.mockapi.io/Cong/`,congObject)
                .then(res => {

                    this.setState({
                        id_emp:'',
                        duree:'',
                        type:'',
                        debut:'',
                        cause:'',
                    });
                    console.log("user",congObject)
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
                    Ajouter congés
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajout congés</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form method="post" onSubmit={this.addUser}>
                                    ID Employé:<input className="form-control" type="number" value={this.state.id_emp} onChange={this.onChange} name="id_emp"></input>
                                    <br></br>Durée:<input className="form-control" type="number" value={this.state.duree} onChange={this.onChange} name="duree"></input>
                                    <br></br>Type:<input type="text" className="form-control" value={this.state.type} name="type" onChange={this.onChange}></input>
                                    <br></br>Debut:<input type="date" className="form-control" value={this.state.debut} name="debut" onChange={this.onChange}></input>
                                    <br></br>Cause:<input type="text" className="form-control" value={this.state.cause} name="cause" onChange={this.onChange}></input>

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