import React, { Component } from 'react'
import SingleEmployee from "./SingleEmployee"


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Meet our employees!</h3>
                {
                    this.props.TacoEmployees.map(eObj =>
                        <section key={`employeeSection--${eObj.id}`}>
                            <SingleEmployee key={`SingleEmployee--${eObj.id}`}
                                TacoEmployees={this.props.TacoEmployees}
                                employee={eObj} />
                            <button key={`fire--${eObj.id}`} onClick={() => {
                                this.props.fireEmployee(eObj.id)
                            }}>Fire</button>
                        </section>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList