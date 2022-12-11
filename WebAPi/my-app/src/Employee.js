import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

export  class Employee extends Component
{
    constructor(props)
    {
        super(props)
        this.state={emps:[]}
    }

    refresList()
    {
        fetch('http://127.0.0.1:8000/employee')
        .then(response => response.json())
        .then(data =>{
            this.setState({emps:data});
        })
    }

    componentDidMount(){
        this.refresList();
    }

    componentDidUpdate(){
        this.refresList();
    }
    render()
    {
        const {emps}=this.state;
        return <div>
            <Table className='mt-4' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department </th>
                        <th>Date of join</th>
                        <th>Photo name</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(ep =>
                        <tr key={ep.EmployeeId}>
                            <td>{ep.EmployeeId}</td>
                            <td>{ep.EmployeeName}</td>
                            <td>{ep.DepartmentName}</td>
                            <td>{ep.DataOfJoining}</td>
                            <td>{ep.PhotoFileName}</td>

                        </tr>)}
                </tbody>
            </Table>
        </div>
        
    }
}
