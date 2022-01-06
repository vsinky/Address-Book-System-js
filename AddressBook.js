class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zip = " + this.zip +
            ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}

let contact = new AddressBook("Sinky", "Verma", "New shivpuri", "Ludhiana", "Punjab", "141141", "7412589632", "sinky@gmail.com")
console.log(contact.toString());