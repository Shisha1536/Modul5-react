import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {

    const [value, setValue] = useState('');
    return(
        <form>
            <div>
                <label htmlFor="surname" className={styles.label}>Фамилия</label>
                <input name="surname" type="text" />
                <label htmlFor="name" className={styles.label}>Имя</label>
                <input name="name" type="text" />
                <label htmlFor="middle-name" className={styles.label}>Отчество</label>
                <input name="middle-name" type="text" />
            </div>
            <label htmlFor="auto">Авто</label>
            <select name="auto" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="1">Mercedes-Benz</option>
                <option value="2">BMW</option>
                <option value="3">Volkswagen</option>
            </select>
        </form>
    )
}