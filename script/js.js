const sw = document.getElementById('switch');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
console.log(d1, d2, d3);
document.getElementById('switch').addEventListener('click', (e) => {
    /*  e.target.classlst.add('active'); */
    if (sw.classList.contains('active')) {
        sw.classList.remove('active');
        d1.innerHTML = '199.99';
        d2.innerHTML = '249.99';
        d3.innerHTML = '399.99';
    } else {
        sw.classList.add('active');
        d1.innerHTML = '19.99';
        d2.innerHTML = '24.99';
        d3.innerHTML = '39.99';
    }
})