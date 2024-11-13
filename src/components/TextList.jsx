import { useContext } from "react";
import TodoListContext from "../context/context";

export default function TextList() {
    const data = useContext(TodoListContext);
    const { texts } = data;
    return (
        <ul>
            {texts.map((text, index) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    );
}
