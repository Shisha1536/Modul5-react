
import './App.css';
import Welcome from "./components/Welcome";

let arr = ['Алексей', "Платон", "Сергей", "Александр", "Игорь"];

function App() {
	return (
		<div>123
			<Welcome  name={arr[0]}/>
			<Welcome  name={arr[1]}/>
			<Welcome  name={arr[2]}/>
			<Welcome  name={arr[3]}/>
			<Welcome  name={arr[4]}/>
		</div>
		
		
	);
}

export default App;
