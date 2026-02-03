import { useState } from "react";

export default function BatchingDemo() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("");
	const [renderCount, setRenderCount] = useState(0);

	const handleMultipleUpdates = () => {
		setCount((prev) => prev + 1);
		setText("Обновлено");
		setRenderCount((prev) => prev + 1);
	};

	const handleAsyncUpdates = () => {
		setTimeout(() => {
			setCount((prev) => prev + 1);
			setText("Async обновлено");
			setRenderCount((prev) => prev + 1);
		}, 100);
	};

	const handleEventUpdates = () => {
		fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
			setCount((prev) => prev + 1);
			setText("Fetch обновлено");
			setRenderCount((prev) => prev + 1);
		});
	};

	const handleMultipleAsyncBatch = async () => {
		await Promise.resolve();

		setCount((prev) => prev + 1);
		setText("Async batch");
		setRenderCount((prev) => prev + 1);
	};

	return (
		<section className="demo-section">
			<h2>3. Automatic Batching Improvements</h2>
			<p className="demo-description">
				React 19 автоматически группирует обновления состояния во ВСЕХ
				случаях, включая setTimeout, promises, native event handlers и
				async/await.
			</p>

			<div className="demo-content">
				<div className="batching-display">
					<div className="stat-card">
						<span className="stat-label">Счетчик:</span>
						<span className="stat-value">{count}</span>
					</div>
					<div className="stat-card">
						<span className="stat-label">Текст:</span>
						<span className="stat-value">
							{text || "Не изменен"}
						</span>
					</div>
					<div className="stat-card">
						<span className="stat-label">Рендеров:</span>
						<span className="stat-value highlight">
							{renderCount}
						</span>
					</div>
				</div>

				<div className="buttons-grid">
					<button
						onClick={handleMultipleUpdates}
						className="demo-button"
					>
						Синхронные обновления
						<small>3 обновления → 1 рендер</small>
					</button>

					<button
						onClick={handleAsyncUpdates}
						className="demo-button"
					>
						setTimeout обновления
						<small>3 обновления → 1 рендер</small>
					</button>

					<button
						onClick={handleEventUpdates}
						className="demo-button"
					>
						Promise обновления
						<small>3 обновления → 1 рендер</small>
					</button>

					<button
						onClick={handleMultipleAsyncBatch}
						className="demo-button"
					>
						Async/await обновления
						<small>3 обновления → 1 рендер</small>
					</button>
				</div>

				<button
					onClick={() => {
						setCount(0);
						setText("");
						setRenderCount(0);
					}}
					className="reset-button"
				>
					Сбросить
				</button>
			</div>

			<div className="info-box">
				<strong>Что изменилось:</strong>
				<ul>
					<li>
						<strong>React 18:</strong> Batching только в event
						handlers
					</li>
					<li>
						<strong>React 19:</strong> Автоматический batching везде
					</li>
					<li>Меньше рендеров = лучшая производительность</li>
					<li>Работает с async/await, setTimeout, promises</li>
					<li>Более предсказуемое поведение приложения</li>
				</ul>
			</div>

			<div className="comparison-box">
				<h3>Сравнение:</h3>
				<div className="comparison-grid">
					<div className="comparison-item">
						<strong>React 18</strong>
						<code>setTimeout → 3 рендера</code>
					</div>
					<div className="comparison-item highlight">
						<strong>React 19</strong>
						<code>setTimeout → 1 рендер ✓</code>
					</div>
				</div>
			</div>
		</section>
	);
}
