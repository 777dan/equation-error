function linearEquation() {
    try {
        let a = +prompt('Input a');
        let b = +prompt('Input b');
        if (!isNaN(a) && !isNaN(b)) {
            if (a === 0) {
                throw new Error('a cannot be equal to 0')
            } else {
                let x = - b / a;
                alert(x);
            }
        } else {
            throw new Error('Not a number. Try again');
        }
    }
    catch (ex) {
        alert(`ERROR: ${ex.message}`);
    }
}

function quadraticEquation() {
    try {
        let a = +prompt('Input a coefficient');
        let b = +prompt('Input b coefficient');
        let c = +prompt('Input c coefficient');
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            if (a === 0) {
                if (b === 0 && c == 0) {
                    alert('The set of solutions');
                }
                if (b == 0 && c !== 0) {
                    throw new Error('No solutions');
                } else {
                    c = c * -1;
                    let x = c / b;
                    alert(x);
                }
            }
            else {
                let discriminant = b ** 2 - 4 * a * c;
                if (discriminant > 0) {
                    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                    alert(`The quadratic equation has two roots: ${x1} and ${x2}`);
                }
                if (discriminant === 0) {
                    let x = -b / (2 * a);
                    alert(`The quadratic equation has one root - ${x}`);
                }
                if (discriminant < 0) {
                    throw new Error('The quadratic equation has no roots');
                }
            }
        } else {
            throw new Error('Not a number. Try again');
        }
    }
    catch (ex) {
        alert(`ERROR: ${ex.message}`);
    }
}
