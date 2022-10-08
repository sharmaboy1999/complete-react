import React from 'react'

function Functionclick() {

    function clickHandler() {
        console.log('button has been clicked');
        
    }
    return (
        <div>
            <button onClick={clickHandler}> click me</button>
        </div>
    )
}

export default Functionclick
