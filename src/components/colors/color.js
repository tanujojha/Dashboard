import React from 'react';
import "./color.css"

function Color() {

    let colorData = [
        {
            name: "Primary",
            code: "#4e73df"
        },
        {
            name: "Success",
            code: "#1cc88a"
        },
        {
            name: "Info",
            code: "#36b9cc"
        },
        {
            name: "Warning",
            code: "#f6c23e"
        },
        {
            name: "Danger",
            code: "#e74a3b"
        },
        {
            name: "Secondary",
            code: "#858796"
        },
        {
            name: "Light",
            code: "#f8f9fc"
        },
        {
            name: "Dark",
            code: "#5a5c69"
        },
    ];

  return (
    <div className='colormaindiv'>
        {colorData.map((col)=>{
            return(
                <div className='colordiv' style={{background: col.code}}>
                    <span className='colname'>{col.name}</span>
                    <span className='colcode'>{col.code}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Color