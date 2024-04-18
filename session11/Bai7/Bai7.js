"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const monthlyInterest = (this.balance * this.interestRate) / 100;
        console.log(`Monthly interest earned: $${monthlyInterest}`);
        return monthlyInterest;
    }
}
const mySavingsAccount = new SavingsAccount("SA123456789", 1000, 0.05);
console.log("Initial balance: $" + mySavingsAccount.balance);
const interestEarned = mySavingsAccount.calculateInterest();
mySavingsAccount.deposit(500);
const newInterestEarned = mySavingsAccount.calculateInterest();
