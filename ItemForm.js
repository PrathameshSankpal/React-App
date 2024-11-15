import React, {useState } from 'react';
function ItemForm(){
    const[itemName, setItemName]=useState('');
    const[quantity, setquantity]=useState('');
    const[unitPrice, setunitPrice]=useState('');
    const[submissionDate, setSubmissionDate]= useState('');

    const handleIteamNameChange=(e)=> setItemName(e.target.value);
    const handlequantityChange=(e)=> setIquantity(e.target.value);
    const handleunitPriceChange=(e)=> setunitePrice(e.target.value);
    const handleDateChange=(e)=> setSubmissionDate(e.target.value);

    return(
        <div>
            <h2>Iteam Details</h2>
            <label>
                IteamName:
                <input type="text" value ={itemName} onChange={handleIteamNameChange}maxLength="225"/>
            </label>

            <label>
                Quantity:
                <input type="number" value ={quantity} onChange={handlequantityChange}maxLength="10"/>
            </label>

            <label>
                unit Price:
                <input type="text" value ={unitPrice} onChange={handleunitPriceChange}/>
            </label>

            <label>
               Date of Submission:
                <input type="date" value ={submissionDate} onChange={handleDateChange} min={new Date().toISOString().split("T")[0]}/>
            </label>
        </div>
    );
}
export default ItemForm;