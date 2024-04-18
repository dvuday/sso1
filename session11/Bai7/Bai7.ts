class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    public calculateInterest(): number {
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
