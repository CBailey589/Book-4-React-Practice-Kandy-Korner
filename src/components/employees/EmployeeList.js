import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Meet our employees!</h3>
                {
                    this.props.TacoEmployees.map(eObj =>
                        <div key={`employee--${eObj.id}`}>
                            {eObj.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList