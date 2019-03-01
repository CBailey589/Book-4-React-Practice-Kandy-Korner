import APIManager from "../utilities/APIManager"

const StoreManager = Object.create(APIManager, {
    array: {
        value: "storeArray"
    }
})

export default StoreManager