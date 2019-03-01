import APIManager from "../utilities/APIManager"

const EmployeeManager = {
    GET(id) {
        return APIManager.GET("employeeArray", id)
    },
    GETALL() {
        return APIManager.GETALL("employeeArray")
    },
    DELETE(id) {
        return APIManager.DELETE("employeeArray", id)
    }
}

export default EmployeeManager