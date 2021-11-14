import React, { useState } from "react";

export const ListaDeTareas = () => {
	const [task, setTask] = useState("");
	const [allTask, setAllTask] = useState([]);
	const [error, setError] = useState(false);
	const addTask = e => {
		if (e.key == "Enter") {
			if (e.target.value.trim() != "") {
				var newAllTask = [...allTask, task];
				setAllTask(newAllTask);
				setTask("");
				setError(false);
			} else {
				setError(true);
			}
		}
	};
	const deleteTask = id => {
		// if(e.key == "Backspace") {
		// 	var deleteAllTask = [...allTask, task];
		// 	setAllTask(deleteAllTask);
		// }
		let newAllTask = allTask.filter((task, index) => {
			return id != index;
		});
		setAllTask(newAllTask);
	};
	return (
		<div id="all">
			<div className="Container">
				<div className="row">
					<div className="col-12">
						<h2 className="text-center">My Todolist</h2>
					</div>
				</div>
			</div>
			<div className="Container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						{error ? (
							<div className="alert alert-danger text-center">
								Brother, you dont have anything there ... whats
								wrong with you, chamo
							</div>
						) : null}
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<input
							type="text"
							placeholder="Introduce un texto"
							className="form-control outline-none"
							value={task}
							onChange={e => setTask(e.target.value)}
							onKeyPress={addTask}
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<ul>
							{allTask.map((task, index) => {
								return (
									<li
										key={index}
										onClick={() => deleteTask(index)}>
										{task}
										<p>X</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
