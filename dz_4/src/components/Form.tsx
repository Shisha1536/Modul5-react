import { SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
import styles from "./Form.module.css";
import Start from "./StartButton";

export default function Form(funck: { (value: SetStateAction<JSX.Element>): void; (arg0: JSX.Element): void; }) {

    function Click() {
        funck(Start(funck))
    }

    return(
        <form className={styles.form}>
            <div>
                <label htmlFor="surname" className={styles.label}>Фамилия</label>
                <input name="surname" type="text" />
                <label htmlFor="name" className={styles.label}>Имя</label>
                <input name="name" type="text" />
                <label htmlFor="middle-name" className={styles.label}>Отчество</label>
                <input name="middle-name" type="text" />
            </div>
            <div>
                <label htmlFor="auto">Авто</label>
                <select name="auto">
                    <option value="1">Mercedes-Benz</option>
                    <option value="2">BMW</option>
                    <option value="3">Volkswagen</option>
                </select>
            </div>
            <button type="button" onClick={Click}>Отмена</button>
        </form>
    )
}