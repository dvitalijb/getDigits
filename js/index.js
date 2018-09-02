function getDigits() {
    var a = prompt('Введіть значення а');
    var b = prompt('Введіть значення b');
    var c = prompt('Введіть значення c');
    var d = (b * b) - (4 * a * c);
    var x1 = ((-1) * b) + (Math.sqrt(d)) / (2 * a);
    var x2 = ((-1) * b) - (Math.sqrt(d)) / (2 * a);

    if (a == 0) {

        alert('a - не може дорівнювати = 0');
        return;
    }

    if (d < 0) {

        alert('Рівняння немає дійсних коренів');
        return;

    }

    if (d == 0) {

        alert(' у рівняння два рівних корення, ' + x2);
        return;
    }

    alert(x2);
    alert(x1);
}
