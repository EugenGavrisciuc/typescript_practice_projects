// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение

abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    };
};

class ShowLogger extends Logger {
    log(message: string): void {
        console.log(message);
    };

    logWithDate(userMessage: string) {
        this.printDate(new Date());
        this.log(userMessage);
    }
}

new ShowLogger().logWithDate("This is the current date.");