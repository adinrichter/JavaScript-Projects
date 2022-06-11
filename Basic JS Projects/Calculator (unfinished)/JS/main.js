// initialization
const memory = [];
let decimal = 0;

// functions
function renderNum() {
    temp = "";
    for (m in memory) {
        temp = `${temp}${memory[m]}`
    }
    for (d in temp); if (temp[d] == ".") {
        ++decimal
        if (decimal > 1) {
            temp.replace(temp[d], "hi");
            decimal = 1;
        }
    }
    display = temp;
    document.getElementById("info").value = display;
}

function memAdd(arg) {
    memory.push(arg);
    renderNum();
    console.log(decimal);
}
