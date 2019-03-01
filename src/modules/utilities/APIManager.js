
import Settings from "./Settings"

export default Object.create(null, {
    GET: {
        value: function (array, id) {
            return fetch(`${Settings.url}/${this.array}/${id}`)
                .then(r => r.json())
        }
    },
    GETALL: {
        value: function (array) {
            return fetch(`${Settings.url}/${this.array}`)
                .then(r => r.json())
        }
    },
    DELETE: {
        value: function(array, id) {
            return fetch(`${Settings.url}/${this.array}/${id}`,
            {
                method:"DELETE"
            })
        }
    }
})