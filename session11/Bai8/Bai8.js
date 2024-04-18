"use strict";
class Account1 {
    constructor(accountNumber, balance1) {
        this.accountNumber = accountNumber;
        this.balance1 = balance1;
    }
    deposit(amount) {
        this.balance1 += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance1}`);
    }
    withdraw(amount) {
        if (amount > this.balance1) {
            console.log("Insufficient funds.");
        }
        else {
            this.balance1 -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance1}`);
        }
    }
}
class CheckingAccount extends Account1 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance1 + this.overdraftLimit) {
            this.balance1 -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance1}`);
        }
        else {
            console.log("Exceeded overdraft limit.");
        }
    }
}
const myCheckingAccount = new CheckingAccount("CA987654321", 1000, 500);
console.log("Initial balance: $" + myCheckingAccount.balance1);
myCheckingAccount.withdraw(1500);
console.log("Balance after withdrawal: $" + myCheckingAccount.balance1);
myCheckingAccount.withdraw(600);
