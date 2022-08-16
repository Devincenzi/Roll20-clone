import React from "react";

interface MyInputGroupProps {
    label: string,
    typeInput?: 'text' | 'number',
    value: any,
    name: string,
    isReadOnly?: boolean,
    onchange?: (e: any) => void
    hasButton?: boolean,
    onclick: (e: any) => void,
}

export default function MytInputGroup(props: MyInputGroupProps){
    return (
        <div className='input-group'>
            <div className="input-group-text">{props.label}</div>
            <input readOnly={props.isReadOnly} type={props.typeInput ?? 'text'} className='form-control' name={props.name} value={props.value} onChange={props.onchange}/>
            <div className="btn btn-secondary input-group-text" onClick={props.onclick}>enviar</div>
        </div>
    )
}