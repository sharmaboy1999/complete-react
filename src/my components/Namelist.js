import React from 'react'

function Namelist() {
    const names = ['nobita', 'sinzuka', 'sunio', 'jiyaan']
    const namelist = names.map(name => <h2>{name}</h2>)

    return (
        <div>
            {
                namelist
            }
        </div>
    )
}

export default Namelist
