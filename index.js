
function calcTwiceByYears(){
    let requireYears = document.getElementById('requireYears').value;

    let resultYears = (2**(1/requireYears)-1)*100;

    document.getElementById('resultByYears').innerHTML = resultYears + '%';
}

function calcTwiceByInterest(){
    let requireInterlest = document.getElementById('requireInterest').value;

    let resultInterlest = Math.log(2)/Math.log(1+requireInterlest/100);
    // let resultInterlest = Math.log(2);

    document.getElementById('resultByInterlest').innerHTML = resultInterlest + '年';
}
