const button = document.getElementById('button');

const showButton = () => {
    button.style.display = 'block';
} 

const printCV = () => {
    button.style.display = 'none';
    window.print();
    window.onafterprint = showButton();
}
