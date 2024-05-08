import { JSX } from "react/jsx-runtime";
import Form from "./Form";

export default function StartButton(funck: React.Dispatch<React.SetStateAction<JSX.Element>>) {
    function Click() {
        funck(Form(funck))
    }
    return(
        <button type="button" onClick={Click}>Регистрация</button>
    )
}