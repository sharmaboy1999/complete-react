import React from 'react'

function Childcomponent(props) {
    return (
        <div>
            <button onClick={props.newhandler}> new parrent</button>
        </div>
    )
}

export default Childcomponent
