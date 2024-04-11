import style from "../css/List.module.css";

export default function List() {
    return(
        <ul className={style.list }>
            <li className={style.listItem}>1.Понедельник</li>
            <li className={style.listItem}>2.Вторник</li>
            <li className={style.listItem}>3 Среда</li>
            <li className={style.listItem}>4.Четверг</li>
            <li className={style.listItem}>5.Пятница</li>
        </ul>
    );
}