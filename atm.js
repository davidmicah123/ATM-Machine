'use strict';
let amount_disp = document.querySelector('body .software_value'),
    go = document.querySelector('body .go'),
    amount = document.querySelector('body .user_input'),
    next = document.querySelector('body .next'),
    transfer = document.querySelector('body .transfer'),
    acc2 = '';
    
const accBalance = 500000;
console.log(typeof(parseInt(amount.innerHTML)));

const person_details = ['ACCOUNT-NAME: MFONIDO MARK', 'ACCOUNT NUMBER:', 'BANK NAME: FIRST BANK']

let password = 2007;

go.addEventListener('click', (e)=>{
    e.preventDefault();
    if (amount.value == 1){
        amount_disp.innerHTML = 'HOW MUCH DO YOU WISH TO CASH OUT';
        const acc = Number(prompt('enter your account  number'));
        let pin = Number(prompt('enter your PASSWORD'));
        if (password == pin){
            alert(`YOUR ACCOUNT NUMBER IS ${acc}`);
        }else{
            alert('invalid pin');
        }
    }else if (amount.value == 2){
        
         const acc1 = Number(prompt('enter your account  number'));
         let pin = Number(prompt('enter your PASSWORD'));
         if (password == pin){
            alert(`YOUR ACCOUNT NUMBER IS ${acc1}`);
            this.acc2 = prompt('enter recievers account  number');
            alert(`the recievers ACCOUNT NUMBER IS ${this.acc2}`);
            amount_disp.innerHTML = 'HOW MUCH DO YOU WISH TO TRANSFER'

         }else{
            alert('INVALID PASSWORD')
        }
        

    }else{
        alert('INVALID INPUT')
    }
    
});

next.addEventListener('click', (e) =>{
    e.preventDefault();
    if (amount.value <= accBalance){
        amount_disp.innerHTML = 'PROCESSING WIHDRAW';
    amount_disp.value = " ";
    alert(`WITHDRAW OF #${amount.value}`);
    alert(`WITHDRAW OF #${amount.value} SUCESFUL\n YOUR NEW ACCOUNT BALANCE IS ${accBalance - amount.value}`);
    
    amount_disp.innerHTML = 'THANKS FOR BANKING WITH US';
    }else{
        alert('INVALID INPUT')
    }
});


transfer.addEventListener('click', (e) =>{
    e.preventDefault();
    if(amount.value <= accBalance){
        alert(`SUCESFULTRANSFER OF #${amount.value} TO:  \n  ${person_details[0]} \n   ${person_details[1]} ${this.acc2}  \n   ${person_details[2]}   \n  YOUR NEW ACCOUNT BALANCE IS: ${accBalance - amount.value}`);
    
        amount_disp.innerHTML = 'THANKS FOR BANKING WITH US';
    }else{
        alert('INVALID INPUT')
    }
});
