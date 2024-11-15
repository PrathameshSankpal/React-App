import React,{ useState} from 'react';
import ItemForm from '\React.js\ItemForm.js';
import SupplierForm from 'React.js/SupplierForm';

function App(){
    const [showItemForm, setShowItemForm]= useState(false);
    const [showSupplierForm, setShowSupplierForm]= useState(false);
    const handleCheckboxChange=(e) =>{
        if(e.target.name==='item'){
            setShowItemForm(e.target.checked);
        }else{
            setShowSupplierForm(e.target.checked);
        }
    };
    return(
        <div className="App">
            <h1>Inventory Management System</h1>
        <div>
        <label>
            <input 
             type="checkbox"
             name="item"
             onChange={handleCheckboxChange}
             /> Item
        </label>
        <label>
             <input 
             type="checkbox"
             name="supplier"
             onChange={handleCheckboxChange}
             /> Supplier
        </label>
        </div>
        {showItemForm && <ItemForm/>}
        {showSupplierForm && <SupplierForm/>}
</div>
    );
}
