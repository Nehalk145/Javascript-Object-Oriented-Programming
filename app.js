class person {
    /* Add the constructor method here
        - It should take 5 arguments, name of person, date of birth, phone number, email address and address
        - Arguments should be stored in attributes called "name","dateOfBirth","phoneNumber","email","address"
    */
    constructor(name, dateOfBirth, phoneNumber, email, address) {
        // Complete your code here
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
    }

    /* Write a function which will calculate an age of a person*/

    calculateAge() {
        const date = this.dateOfBirth;
        const year = date.split("-")[0];
        if (year) {
            return (2022 - year);
        } else {
            return 0;
        }

    }
}

function getUserInformation() {
    // Get value of name entered by user
    const userName = document.getElementById("name").value;
    // Get value of date of birth, email address, phone number and address. Complete your code here.
    const userDateOfBirth = document.getElementById("dateOfBirth").value;
    const userEmailId = document.getElementById("emailAddress").value;
    const userPhoneNumber = document.getElementById("phoneNumber").value;
    const userAddress = document.getElementById("address").value;
    // create person object using user given data.
    const personDetails = new person(userName, userDateOfBirth, userPhoneNumber, userEmailId, userAddress);
    // Give a call to function calculate age
    const age = personDetails.calculateAge();
    console.log("Age of person is: " + age);
}

// Create new person object
const bob = new person('Bob', '1997-05-14', 'bob@uncc.edu', '9837676382', '9201 University City Blvd, Charlotte, NC 28223');
console.log(bob);

// Create one more person object of your choice and then print it's attribute
