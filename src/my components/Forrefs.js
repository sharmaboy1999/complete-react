import React from 'react'

// function Forrefs() {
//     return (
//         <div>
//            <input type="text" /> 
//         </div>
//     )
// }

const Forrefs = React.forwardRef((props,ref ) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default Forrefs
