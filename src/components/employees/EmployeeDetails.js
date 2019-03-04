import React, { Component } from 'react'


class EmployeeDetails extends Component {
    render() {
        const employeeObj = this.props.TacoEmployees.find(employee => employee.id === parseInt(this.props.match.params.employeeId)) || {}
        const store = this.props.TacoStores.find(store => parseInt(store.id) === parseInt(employeeObj.store)) || {}
        return (
            <section className="employee">
                <div key={employeeObj.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {employeeObj.name}
                        </h4>
                        <div>Works at {store.name}</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EmployeeDetails