import { useState, useTransition, FormEvent } from "react";
import { createTodo } from "../../api/serverActions";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export default function TodoForm() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const text = formData.get("todo") as string;

		if (!text.trim()) return;

		startTransition(async () => {
			const newTodo = await createTodo(text);
			setTodos((prev) => [...prev, newTodo]);
			e.currentTarget.reset();
		});
	};

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<div className="form-container">
			<h3>Список задач</h3>
			<form onSubmit={handleSubmit} className="todo-form">
				<div className="form-group inline">
					<input
						type="text"
						name="todo"
						required
						disabled={isPending}
						placeholder="Новая задача..."
						className="todo-input"
					/>
					<button
						type="submit"
						disabled={isPending}
						className="submit-button"
					>
						{isPending ? "..." : "Добавить"}
					</button>
				</div>
			</form>

			<ul className="todo-list">
				{todos.map((todo) => (
					<li
						key={todo.id}
						className={`todo-item ${todo.completed ? "completed" : ""}`}
					>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
						/>
						<span>{todo.text}</span>
						<button
							onClick={() => deleteTodo(todo.id)}
							className="delete-button"
						>
							✕
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
