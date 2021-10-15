let first = document.querySelector('#first');
let second = document.querySelector('#second');

let btn1 = document.querySelector('.btn1');
let output = document.querySelector('.output')

let allbtn = document.querySelectorAll('input');
console.log(allbtn)
let result;
allbtn.forEach(function (a) {
    a.addEventListener('click' , function () {
        let values = a.value;
        if (values == "+"){
        result = Number(first.value) + Number(second.value);
        }else if(values == "-"){
            result = Number(first.value) - Number(second.value);
        }else if (values == "/"){
            result = Number(first.value) / Number(second.value);
        }else{
            result = Number(first.value) * Number(second.value);
        }
        output.textContent = result
    })
})
