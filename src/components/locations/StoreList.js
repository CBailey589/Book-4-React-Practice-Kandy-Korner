import React, { Component } from 'react'
import { Link } from "react-router-dom";


class StoreList extends Component {
    render() {
        return (
            <section className="storeLocations">
                <h3>Kandy Korner has two locations:</h3>
                {
                    this.props.TacoStores.map(sObj =>
                        <div key={`store--${sObj.id}`}>
                        <Link className="nav-link" to={`/stores/${sObj.id}`}>{sObj.name}</Link>
                            <div key={`address--${sObj.id}`}>
                               Address: {sObj.address}
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default StoreList