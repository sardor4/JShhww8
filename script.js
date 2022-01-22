function calc() {
    this.prompt = function () {
        this.a = +prompt('Введите первое число', 0);
        this.b = +prompt('Введите второе число', 0);
        this.sym = prompt('Выберите символ', "+");
    };
    this.counter = function () {
        if (this.sym == "+") {
            return this.a + this.b;
        } else if (this.sym == "-") {
            return this.a - this.b;
        } else if (this.sym == "*") {
            return this.a * this.b;
        } else if (this.sym == "/") {
            return this.a / this.b;
        }
    }
}
let calcul = new calc();
calcul.prompt();
console.log(calcul.counter());