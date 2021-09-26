const db = require('../common/connect')

const Customer = function(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
}