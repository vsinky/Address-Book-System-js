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
        //getters and setters
    get firstname() { return this._firstname; }
    set firstname(firstname) {
        let pattern1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern1.test(firstname))
            this._firstname = firstname;
        else console.log('FirstName is Incorrect!');
    }

    get lastname() { return this._lastname; }
    set lastname(lastname) {
        let pattern2 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern2.test(lastname))
            this._lastname = lastname;
        else console.log('LastName is Incorrect!');
    }

    get address() { return this._address; }
    set address(address) {
        let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern3.test(address))
            this._address = address;
        else console.log('Address is Incorrect!');
    }

    get city() { return this._city; }
    set city(city) {
        let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern4.test(city))
            this._city = city;
        else console.log('City is Incorrect!');
    }

    get state() { return this._state; }
    set state(state) {
        let pattern5 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern5.test(state))
            this._state = state;
        else console.log('State is Incorrect!');
    }

    get zipcode() { return this._zipcode; }
    set zipcode(zipcode) {
        let pattern6 = RegExp('^[0-9]{3}?[\\s,-]{0,1}[0-9]{3}$');
        if (pattern6.test(zipcode))
            this._zipcode = zipcode;
        else console.log('Zipcode is Incorrect!');
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let pattern7 = RegExp('^[+][0-9]{2}\\s?[1-9]{1}[0-9]{9}$');
        if (pattern7.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else console.log('PhoneNumber is Incorrect!');
    }

    get email() { return this._email; }
    set email(email) {
        let pattern8 = RegExp('^[0-9a-zA-Z+-._]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}.([a-zA-z]{2,3})*$');
        if (pattern8.test(email))
            this._email = email;
        else console.log('EmailId is Incorrect!');
    }

    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zip = " + this.zip +
            ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}

let contact1 = new AddressBook("Sinky", "Verma", "New shivpuri", "Ludhiana", "Punjab", "141141", "7412589632", "sinky@gmail.com")
let addressBookArray = new Array();
addressBookArray.push(contact1);
addressBookArray[1] = new AddressBook("Sandy", "Kumar", "Bypass", "Patna", "Bihar", "112222", "7894561234", "Sandy@gmail.com");

console.log(addressBookArray);

let index = addressBookArray.findIndex((obj => obj.firstName == "Sandy"));
console.log("Before Update : " + addressBookArray[index]);
addressBookArray[index].state = "UP";
console.log("After Update : " + addressBookArray[index]);