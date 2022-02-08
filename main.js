const button = document.getElementById('button');
console.log(button.style.display)

const printCV = () => {
    button.style.display = none;
    window.print();
}

const showButton = () => {
    button.style.display = block;
} 