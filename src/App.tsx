/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import EmployeeOrgApp from './EmployeeOrgApp';
import { CEO } from './interfaces';

const list: any = CEO.subordinates.forEach(el => {
	<li>{el}</li>
})
function App() {
	const app = new EmployeeOrgApp();
	app.move(1, 4)
	return (
		<div className="App">
			{list}
			<button onClick={app.undo()}>undo</button>
			<button onClick={app.redo()}>redo</button>
		</div>
	);
}

export default App;
