import Settings from "./Settings"

export default Object.create(null, {
    GET: {
        value: function (array, id) {
            return fetch(`${Settings.url}/${array}/${id}`)
                .then(r => r.json())
        }
    },
    GETALL: {
        value: function (array) {
            return fetch(`${Settings.url}/${array}`)
                .then(r => r.json())
        }
    },
    DELETE: {
        value: function(array, id) {
            return fetch(`${Settings.url}/${array}/${id}`,
            {
                method:"DELETE"
            })
        }
    }
})