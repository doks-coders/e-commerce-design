import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';


const DropdownDemo = ({modes,selectMode,setSelectedMode,onModeChange,width,placeholder}) => {
   useEffect(() => {
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
    
           <>
           <Dropdown style={{width:width}} value={selectMode} options={modes} onChange={onModeChange} optionLabel="name" placeholder={placeholder} />
            
           </>
                
       
    );
}

export default DropdownDemo