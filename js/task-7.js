/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {

        const id = this.transactions.length + 1;
        return {
            id,
            amount,
            type
        };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        this.balance += amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.amount > this.balance) {
            console.log('Недостаточно средств !');
            return;
        }
        this.balance -= amount;
        this.transactions.push(
            this.createTransaction(amount, Transaction.WITHDRAW)
        );
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let commonAmount = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                commonAmount += transaction.amount;
            }
        }
        return commonAmount;
    },
};

account.deposit(180);
account.deposit(180);
account.withdraw(20);
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('deposit'));