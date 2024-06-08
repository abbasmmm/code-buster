
import React, { useContext } from "react";
import './BreadCrumb.css'
import { MyContext } from ".";
export const BreadCrumb = props => {
    const { state, setState } = useContext(MyContext);

    return <><ul>
        <li><a href="#"><span>{state.category}</span></a></li>
        <li><a href="#" class="active"><span>{state.tech}</span></a></li>
        <li><a href="#" class="active"><span>Question {state.seq} of {state.total}</span></a></li>
    </ul>

    </>
}