import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { Provider } from "react-redux";
import reduxStore from "./redux/config/store";

function App() {
    return (
        <Provider store={reduxStore}>
            <div>
                <h1>Text Input and Listing</h1>
                <TextInput />
                <TextList />
            </div>
        </Provider>
    );
}

export default App;
