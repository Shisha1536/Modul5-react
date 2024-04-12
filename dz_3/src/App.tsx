import React from 'react';
import './App.css';
import Welcome from "./components/Welcome";

function App() {
	let name: string | null = prompt();
	return (
		<React.Fragment>
			<Welcome {...name} />
		</React.Fragment>
	);
}

export default App;
