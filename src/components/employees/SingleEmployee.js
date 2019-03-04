import React, { Component } from 'react'
import { Link } from "react-router-dom"

class SingleEmployee extends Component {
    render() {
        let employee = this.props.employee
        return (
            <div key={`employee-${employee.id}`} className="singleEmployee">
            <Link className="nav-link" to={`/employees/${employee.id}`}>{employee.name}</Link>
                <button onClick={() => {
                    this.props.fireEmployee(employee.id)
                }}
                >Fire</button>
            </div>
        )
    }
}

export default SingleEmployee