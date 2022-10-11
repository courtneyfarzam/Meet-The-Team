const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email)
        this.phone = phone
    }

    getofficeNum() {
        return this.phone
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;