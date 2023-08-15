//step 1 add event handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('clicked');
    // step 2 (1) get input field 
    const depositField = document.getElementById('deposit-field');
    // step 2 (2) collect input field value
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 7
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number for deposit');
        return;
    }
    // console.log(depositAmount);
    // step 3. place and update deposit amount
    const updateDeposit = document.getElementById('update-deposite');
    const priviousDepositString = updateDeposit.innerText;
    const priviousDeposit = parseFloat(priviousDepositString);
    // console.log(deposit);
    // STEP 4 to get total deposit after adding old value with new value 
    const depositTotal = priviousDeposit + newDepositAmount;
    updateDeposit.innerHTML = depositTotal;
    // step 5 to get balance total
    const updateBalance = document.getElementById('update-balance');
    const priviousBalanceString = updateBalance.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);

    // step 6 to get total balance after adding old value with new value 
    const balanceTotal = priviousBalance + newDepositAmount;
    updateBalance.innerHTML = balanceTotal;
});
