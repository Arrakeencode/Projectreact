import React from 'react';
import axios from 'axios';

export default class CreateSalaire extends React.Component{
    state = {
        id_emp:'',
        brute:'',
        nette:'',
        taxes:'',
        avance:'',
        mois:'',
        users: [],
    }
    componentDidMount() {
        axios.get(`https://632c531a5568d3cad882dae9.mockapi.io/Employe/`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log("user",users)
                console.log(users.length)
            })
    }


    addUser=event => {

        const users = this.state.users
        const salaireObject={
            id_emp:this.state.id_emp,
            brute:this.state.brute,
            nette:this.state.nette,
            taxes:this.state.taxes,
            avance:this.state.avance,
            mois:this.state.mois,
        }
        function percentage(a, b) {
            return (( a - b ) / b) * 100;
        }
        const bn = percentage(this.state.brute, this.state.nette)

        const tax = percentage(this.state.taxes, this.state.brute)

        const av = percentage(this.state.avance, this.state.brute)
        console.log(av)

        if (this.state.id_emp > users.length || this.state.id_emp < 1){
            event.preventDefault();
            alert("id invalid");
        }
        else if(bn < 10){
            event.preventDefault();
            alert("brute pas assez supérieur a net");
        }
        else if(tax > -80){
            event.preventDefault();
            alert("taxes dépasse 20% du brute");
        }
        else if(av > -65){
            event.preventDefault();
            alert("avance doit etre inferieur a 35% du brute");
        }
        else  {
            axios.post(`https://632c531a5568d3cad882dae9.mockapi.io/Salaire/`,salaireObject)
                .then(res => {

                    this.setState({
                        id_emp:'',
                        brute:'',
                        nette:'',
                        taxes:'',
                        avance:'',
                        mois:'',
                    });
                    console.log("user",salaireObject)
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
                    Ajouter salaire
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajout salaire</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form method="post" onSubmit={this.addUser}>
                                    ID Employé:<input className="form-control" type="number" value={this.state.id_emp} onChange={this.onChange} name="id_emp"></input>
                                    <br></br>Brute:<input className="form-control" type="number" value={this.state.brute} onChange={this.onChange} name="brute"></input>
                                    <br></br>Nette:<input type="number" className="form-control" value={this.state.nette} name="nette" onChange={this.onChange}></input>
                                    <br></br>Taxes:<input type="number" className="form-control" value={this.state.taxes} name="taxes" onChange={this.onChange}></input>
                                    <br></br>Avance:<input type="number" className="form-control" value={this.state.avance} name="avance" onChange={this.onChange}></input>
                                    <br></br>Mois:<input type="number" className="form-control" value={this.state.mois} name="mois" onChange={this.onChange}></input>
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