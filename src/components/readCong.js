import React from 'react';
import axios from 'axios';
export default class ReadCong extends React.Component{
    state = {
        congs: []
    }
    componentDidMount() {
        axios.get(`https://632c531a5568d3cad882dae9.mockapi.io/Cong/`)
            .then(res => {
                const congs = res.data;
                this.setState({ congs });
                //console.log("cong",congs)
            })
    }
    deleteRow(id, e){

        axios.delete(`https://632c531a5568d3cad882dae9.mockapi.io/Cong/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const congs = this.state.congs.filter(item => item.id !== id);
                this.setState({ congs });
            })
    }
    render() {
        return(
            <>
                <h2 className="text-center">Congés</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID Employé</th>
                        <th>Durée</th>
                        <th>Type</th>
                        <th>Debut</th>
                        <th>Cause</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.congs.map((cong) => (
                        <tr>
                            <td>{cong.id_emp}</td>
                            <td>{cong.duree}</td>
                            <td>{cong.type}</td>
                            <td>{cong.debut}</td>
                            <td>{cong.cause}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e) => this.deleteRow(cong.id, e)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    };
}