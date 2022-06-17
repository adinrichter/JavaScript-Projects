function calculate() {
    // creates a timer function to be used to delay printout
    const timer = ms => new Promise(res => setTimeout(res, ms));
    const limit = Number(document.getElementById("limit").value);
    const out = [];
    let i = 0;
    // counts to the number the user gives, and adds each iteration to an array
    while (i <= limit) {
        i++, out.push(` ${i}`);
    }
    // creates a print function which is used display new characters sequentially
    async function print () {
        for (let i = 0; i <= limit; i++) {
            document.getElementById("result").innerHTML = out.slice(0, i);
            await timer(25);
        }
    }
    // calls the print function
    print();
}

