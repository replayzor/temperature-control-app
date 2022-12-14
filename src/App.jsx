import { useEffect, useState } from "react";
import Modal from "./Modal";

function App() {
	const [temperature, setTemperature] = useState(-5);
	const [showWarning, setShowWarning] = useState(false);

	useEffect(() => {
		if (temperature === 30) {
			setShowWarning(true);
		} else if (temperature === -10) {
			setShowWarning(true);
		}
	}, [temperature]);

	const increaseTemp = () => {
		if (temperature === 30) return;
		const newTemperature = temperature + 1;
		setTemperature(newTemperature);
	};

	const decreaseTemp = () => {
		if (temperature === -10) return;
		const newTemperature = temperature - 1;
		setTemperature(newTemperature);
	};

	return (
		<div className="h-96 w-72 bg-cyan-900 rounded-2xl shadow-2xl">
			<div className="flex justify-center items-center h-3/4">
				<div
					style={{
						backgroundColor:
							temperature >= 15 ? "red" : temperature < 10 && "blue",
					}}
					className="bg-cyan-900 transition border-solid border-4 border-sky-100 text-5xl items-center justify-center text-center flex rounded-full text-white h-56 w-56"
				>
					{temperature}°C
				</div>
			</div>
			<div className="flex  justify-evenly items-center">
				<button
					onClick={() => increaseTemp()}
					className="focus:outline hover:bg-gray-700 cursor-pointer border-solid border-2 border-white bg-gray-400 text-white text-3xl h-20 w-20 rounded-full"
				>
					+
				</button>
				<button
					onClick={() => decreaseTemp()}
					className="focus:outline hover:bg-gray-700 cursor-pointer border-solid border-2 border-white bg-gray-400 text-white text-3xl h-20 w-20 rounded-full"
				>
					-
				</button>
			</div>
			{showWarning && (
				<Modal temperature={temperature} setShowWarning={setShowWarning} />
			)}
		</div>
	);
}

export default App;
