import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddText } from "../redux/slices/todoSlice";

function TextInput() {
    const texts = useSelector((state) => state.todoSlice);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(onAddText(inputValue));
            setInputValue("");
        }
    };

      useEffect(() => {
        localStorage.setItem("texts", JSON.stringify(texts));
    }, [texts]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter text"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TextInput;
