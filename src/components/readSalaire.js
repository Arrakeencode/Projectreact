import React from 'react';
import axios from 'axios';
export default class ReadSalaire extends React.Component{
    state = {
        salaires: []
    }
    componentDidMount() {
        axios.get(`https://632c531a5568d3cad882dae9.mockapi.io/Salaire/`)
            .then(res => {
                const salaires = res.data;
                this.setState({ salaires });
                //console.log("salaire",salaires)
            })
    }
    deleteRow(id, e){

        axios.delete(`https://632c531a5568d3cad882dae9.mockapi.io/Salaire/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const salaires = this.state.salaires.filter(item => item.id !== id);
                this.setState({ salaires });
            })
    }
    render() {
        return(
            <>
                <h2 className="text-center">Salaire</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID Employé</th>
                        <th>Brute</th>
                        <th>Nette</th>
                        <th>Taxes</th>
                        <th>Avance</th>
                        <th>Mois</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.salaires.map((salaire) => (
                        <tr>
                            <td>{salaire.id_emp}</td>
                            <td>{salaire.brute}</td>
                            <td>{salaire.nette}</td>
                            <td>{salaire.taxes}</td>
                            <td>{salaire.avance}</td>
                            <td>{salaire.mois}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e) => this.deleteRow(salaire.id, e)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    };
}