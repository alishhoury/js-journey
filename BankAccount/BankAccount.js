class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.history = [];
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Deposited:  $${amount}`);
    } else {
      console.log("Deposite amount must be positive");
    }
  }
  withdraw(amount) {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
    } else if (amount > this.balance) {
      console.log("insufficient Balance");
    } else if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`withdrew: $${amount}`);
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else if (amount <= 0) {
      console.log("please input a valid amount");
    } else if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      anotherAccount.balance += amount;
      this.history.push(
        `Transferred $${amount} to $${anotherAccount.ownerName}`
      );
      anotherAccount.history.push(
        `Recieved $${amount} from $${this.ownerName}`
      );
    }
  }
  getSummary() {
    return `$${this.ownerName}'s balance is $${this.balance}`;
  }

  printHistory() {
    console.log(`$${this.ownerName}'s Transaction History: $${this.history}`);
  }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

console.log(acc1.getSummary());
console.log(acc2.getSummary());

acc1.deposit(200);
acc1.withdraw(50);
acc1.transferTo(acc2, 200);

acc1.printHistory();

console.log(acc1.getSummary());
console.log(acc2.getSummary());

