import React, { Component } from 'react'


class StoreDetail extends Component {
    render() {
        const store = this.props.TacoStores.find(store => store.id === parseInt(this.props.match.params.storeId)) || {}
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
                    </div>
                </div>
            </section>
        )
    }
}

export default StoreDetail