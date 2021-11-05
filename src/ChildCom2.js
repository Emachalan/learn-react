import React from 'react';

export function InnerChild(props) {
    console.log("inner child", props)
    return (
        <div>
            {props.children}
            Inner Child {props.childValue}
            <button onClick={() => props.onBackCall("Hai")}>Hai</button>
        </div>
    )
}

export function ChildCom(props) {
    console.log("props......", props);
    return (
        <InnerChild childValue={props.stateValue} onBackCall={(data) => props.onChildClick(data)}>
            <div>
                {props.children}
                Hai Am children
                Hi this is state: {props.stateValue}
            </div>
        </InnerChild>
    )
}