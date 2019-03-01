import APIManager from "../utilities/APIManager"

const StoreManager = {
    GET(id) {
        return APIManager.GET("storeArray", id)
    },
    GETALL() {
        return APIManager.GETALL("storeArray")
    }
}

export default StoreManager