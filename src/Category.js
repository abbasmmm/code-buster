import React, { useContext, useState } from 'react'
import { MyContext } from '.';
export const ChooseCategory = props => {
    const { state, setState } = useContext(MyContext);

    return <div className='category-container'>{state.category ? (<div style={{ padding: "100px" }}>
        <div className="row1">
            <div className="hex4" onClick={() => setState({...state, tech: 'Java' })}><span>Java</span></div>
            <div className="hex4" onClick={() => setState({...state, tech: 'Dotnet' })}>Dotnet</div>
        </div>
        <div className="row2">
            <div className="hex4" onClick={() => setState({...state, tech: 'Javascript' })}>Javascript</div>
        </div>
    </div>
    ) : <div style={{ padding: "100px" }}>
        <div className="row1 category">
            <div className="hex4" onClick={() => setState({ category: 'Code Buster' })}><span>Code Buster</span></div>
            <div className="hex4" onClick={() => setState({ category: 'Vulnarability Finder' })}>Vulnarability Finder</div>
        </div>

    </div>}</div>

}