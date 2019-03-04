import React, { Component } from 'react'
import SingleEmployee from "../employees/SingleEmployee"

class StoreDetail extends Component {
    render() {
        const store = this.props.TacoStores.find(store => store.id === parseInt(this.props.match.params.storeId)) || {}
        let employees = this.props.TacoEmployees.filter(employee => parseInt(employee.store) === parseInt(store.id)) || []
        return (
            <section className="store">
                <div key={store.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {store.name}
                        </h4>
                        <div>
                            Address: {store.address}
                        </div>
                        <div>
                            <div>
                                Employees:
                            </div>
                            <div>
                                {
                                    employees.map(eObj =>
                                        <SingleEmployee key={`SingleEmployee--${eObj.id}`}
                                            TacoEmployees={this.props.TacoEmployees}
                                            employee={eObj}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StoreDetail