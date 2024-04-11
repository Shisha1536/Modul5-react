import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

	const [numder, setNumder] = useState<number>(0);	
	const [date, setDate] =useState<string>('');
	//function PlusClick() {
	//	setNumder(numder + 1);
	//}
	

	useEffect(() =>{
		setDate(Date());
	}, [])

	return (
		<React.Fragment>
			<div>
				<h3>{String(numder)}</h3>
				<button onClick={()=>setNumder(numder + 1)}>Плюс</button>
				<button onClick={()=>setNumder(numder - 1)}>Минус</button>
			</div>
			<p>{date}</p>
		</React.Fragment>
	);
	}

export default App;
