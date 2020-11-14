const readline = require('readline');
const List = require("collections/list");
const Customer = require("./customer");

let customers = new List()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'SE> '
});

const menuConsoleLog = () => {
    console.log("*** Menu ***")
    console.log("1: Add Customer")
    console.log("2: Add Product")
    console.log("3: New Order")
    console.log("4: Print Customers")
    console.log("5: Print Products")
    console.log("6: Print Orders")
    console.log("x: Exit")
};

const listenForMenuInput = () => {
    rl.on('line', (input) => {
        switch (input) {
            case "1": {
                addCustomer();
                break;
            }
            case "4": {
                printCustomers();
                break;
            }
        }
        menuConsoleLog();
    })
}

const addCustomer = () => {
    let firstname;
    let lastname;
    let street;
    let city;
    let postalCode;
    let phone;
    let email;
    let customer;
    rl.prompt();
    rl.question("Firstname:", (firstnameAnswer) => {
        firstname = firstnameAnswer;
        rl.question("Lastname:", (lastnameAnswer) => {
            lastname = lastnameAnswer;
            rl.question("Street:", (streetAnswer) => {
                street = streetAnswer;
                rl.question("City:", (cityAnswer) => {
                    city = cityAnswer;
                    rl.question("PostalCode:", (postalCodeAnswer) => {
                        postalCode = postalCodeAnswer;
                        rl.question("Phone:", (phoneAnswer) => {
                            phone = phoneAnswer;
                            rl.question("Email:", (emailAnswer) => {
                                email = emailAnswer;
                                customers.add(new Customer(firstname, lastname, street, city, postalCode, phone, email));
                                console.log("Customer was added!");
                            })
                        })
                    })
                })
            })
        })
    });
}

const printCustomers = () => {
    console.table(customers);
}

const execute = () => {
    menuConsoleLog();
    listenForMenuInput();
}

execute();


const rlQ = () => rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});




