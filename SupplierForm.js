import React, {useState } from 'react';

function SupplierForm(){
    const[supplierName, setsupplierName]=useState('');
    const[country, setcountry]=useState('');
    const[state, setstate]=useState('');
    const[city, setcity]= useState('');
    const[email, setemail]= useState('');
    const[phone, setphone]= useState('');


    const handlesupplierNameChange=(e)=> setsupplierName(e.target.value);
    const handlecountryChange=(e)=> setcountry(e.target.value);
    const handlestateChange=(e)=> setstate(e.target.value);
    const handlecityChange=(e)=> setcity(e.target.value);
    const handleemailChange=(e)=> setemail(e.target.value);
    const handlephoneChange=(e)=> setphone(e.target.value);


    return(
        <div>
            <h2>Supplier Details</h2>
            <label>
                supplier Name:
                <input type="text" value ={supplierName} onChange={handlesupplierNameChange}maxLength="225"/>
            </label>

            <label>
            country:
            <select value={country} onChange={handlecountryChange}>
                <option value="USA">USA</option>
                <option value="India">India</option>

            </select>
                
            </label>

            <label>
                state:
                <input type="text" value ={state} onChange={handlestateChange}/>
            </label>

            <label>
               city:
                <input type="text" value ={city} onChange={handlecityChange} />
            </label>
            <label>
               Email Address:
                <input type="email" value ={email} onChange={handleemailChange} />
            </label>
            <label>
               Phone Number:
                <input type="text" value ={phone} onChange={handlephoneChange} />
            </label>
        </div>
    );
    
}
export default SupplierForm;