let expenses=[];
let totalAmt=0;

const categoryselect=document.getElementById('category-select')
const amountip=document.getElementById('amount-input')
const dateip=document.getElementById('date-input')
const addbtn=document.getElementById('add-btn')
const tablebody=document.getElementById('table-body')
const total=document.getElementById('total-amnt')

addbtn.addEventListener('click',function(){
    console.log("heyy clicked");
    const category=categoryselect.value;
    const amount= parseFloat(amountip.value);
    const date=dateip.value;
    
    if(category ===''){
        alert("Please select a category");
        return;
    }
    if(isNaN(amount)||amount<=0){
    alert("Please enter the valid amount");
return;}

    if(date===''){
        alert("please select a date");
        return;
    }

    expenses.push({category,amount,date});

    totalAmt+=amount;
    total.textContent=totalAmt;

    const newrow=tablebody.insertRow();

    const categorycell=newrow.insertCell();
    const amountcell=newrow.insertCell();
    const datecell=newrow.insertCell();
    const deletecell=newrow.insertCell();

    const deletebtn=document.createElement('button');
    deletebtn.textContent='delete';
    deletebtn.classList.add('delete-btn');

    deletebtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
    

    totalAmt-=expense.amount;
    total.textContent=totalAmt;


    tablebody.removeChild(newrow);
})
const expense=expenses[expenses.length-1];

categorycell.textContent=expense.category;
amountcell.textContent=expense.amount;
datecell.textContent=expense.date;
deletecell.appendChild(deletebtn)
});

for(const expense of expenses){
    totalAmt+=amount;
    total.textContent=totalAmt;

    const newrow=tablebody.insertRow();

    const categorycell=newrow.insertCell();
    const amountcell=newrow.insertCell();
    const datecell=newrow.insertCell();
    const deletecell=newrow.insertCell();

    const deletebtn=document.createElement('button');
    deletebtn.textContent='delete';
    deletebtn.classList.add('delete-btn');

    deletebtn.addEventListener('click',function(){
        expenses.slice(expenses.indexOf(expense),1);
    

    totalAmt-=expense.amount;
    total.textContent=totalAmt;

    tablebody.removeChild(newrow);
})
const expense=expenses[expenses.length-1];

categorycell.textContent=expense.category;
amountcell.textContent=expense.amount;
datecell.textContent=expense.date;
deletecell.appendChild(deletebtn);
}