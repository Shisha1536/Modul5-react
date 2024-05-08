import { Dispatch, SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
import Form from "./Form";

export default function StartButton(funck: React.Dispatch<React.SetStateAction<JSX.Element>>) {
    function Click() {
        debugger
        funck(Form)
    }
    return(
        <button type="button" onClick={Click}>Регистрация</button>
    )
}