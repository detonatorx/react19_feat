import { ErrorBoundary } from "react";
import UseHookDemo from "./components/UseHookDemo/UseHookDemo";
import ServerActionsDemo from "./components/ServerActionsDemo/ServerActionsDemo";
import BatchingDemo from "./components/BatchingDemo/BatchingDemo";
import "./App.css";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1>⚛️ React 19 Features Demo</h1>
				<p className="subtitle">
					Демонстрация новых возможностей React 19
				</p>
			</header>

			<main className="app-main">
				<UseHookDemo />
				<ServerActionsDemo />
				<BatchingDemo />
			</main>

			<footer className="app-footer">
				<p>React 19 • Vite • TypeScript</p>
			</footer>
		</div>
	);
}

export default App;
