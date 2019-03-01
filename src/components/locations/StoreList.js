import React, { Component } from 'react'


class StoreList extends Component {
    render() {
        return (
            <section className="storeLocations">
                <h3>Kandy Korner has two locations:</h3>
                {
                    this.props.TacoStores.map(sObj =>
                        <div key={`store--${sObj.id}`}>
                            {sObj.name}
                            <div key={`address--${sObj.id}`}>
                                {sObj.address}
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default StoreList