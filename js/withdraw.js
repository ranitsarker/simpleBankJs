// step 1 button work
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step 2 (1. field work)
    const withdrawField = document.getElementById('withdraw-field');
    // step 2 (2. value work and also string covert to number)
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 7
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number for withdraw');
        return;
    }
    // console.log(newWithdrawAmount);
    //step 3: get previous withdraw total
    const updateWithdraw = document.getElementById('update-withdraw');
    const priviousWithdrawString = updateWithdraw.innerText;
    const priviousWithdraw = parseFloat(priviousWithdrawString);
    // console.log(priviousWithdraw);

    // step 5: get previous balance total
    const updateBalanceAfterWithdraw = document.getElementById('update-balance');
    const priviousBalanceStringAfterWithdraw = updateBalanceAfterWithdraw.innerText;
    const priviousBalanceAfterWithdraw = parseFloat(priviousBalanceStringAfterWithdraw);
    // console.log(priviousBalanceAfterWithdraw);
    if(newWithdrawAmount > priviousBalanceAfterWithdraw){
        alert('You have no amount');
        return;
    }

    //step 4: to get total withdraw after adding old value with new value 
    const withdrawTotal = priviousWithdraw + newWithdrawAmount;
    updateWithdraw.innerHTML = withdrawTotal;

    // step 6 to get total balance after adding old value with new value 
    const balanceTotalAfterWithdraw = priviousBalanceAfterWithdraw - newWithdrawAmount;
    updateBalanceAfterWithdraw.innerHTML = balanceTotalAfterWithdraw;






    


});