import React, { Component } from 'react'
import SingleEmployee from "./SingleEmployee"


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Meet our employees!</h3>
                {
                    this.props.TacoEmployees.map(eObj =>
                        <SingleEmployee key={`SingleEmployee--${eObj.id}`}
                        TacoEmployees={this.props.TacoEmployees}
                        employee={eObj}
                        fireEmployee = {this.props.fireEmployee} />
                    )
                }
            </section>
        )
    }
}

export default EmployeeList