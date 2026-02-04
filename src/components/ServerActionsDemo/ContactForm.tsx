import { useState, useTransition, FormEvent } from "react";
import { submitContactForm } from "../../api/serverActions";

export default function ContactForm() {
	const [isPending, startTransition] = useTransition();
	const [status, setStatus] = useState<{
		type: "idle" | "success" | "error";
		message: string;
	}>({
		type: "idle",
		message: "",
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formElement = e.currentTarget;

		const formData = new FormData(formElement);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			message: formData.get("message") as string,
		};

		startTransition(async () => {
			try {
				const result = await submitContactForm(data);
				setStatus({ type: "success", message: result.message });
				formElement.reset();
			} catch (error) {
				setStatus({
					type: "error",
					message:
						error instanceof Error
							? error.message
							: "Произошла ошибка",
				});
			}
		});
	};

	return (
		<div className="form-container">
			<h3>Форма обратной связи</h3>
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label htmlFor="name">Имя:</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						disabled={isPending}
						placeholder="Ваше имя"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						disabled={isPending}
						placeholder="your@email.com"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="message">Сообщение:</label>
					<textarea
						id="message"
						name="message"
						required
						disabled={isPending}
						placeholder="Ваше сообщение..."
						rows={4}
					/>
				</div>

				<button
					type="submit"
					disabled={isPending}
					className="submit-button"
				>
					{isPending ? "Отправка..." : "Отправить"}
				</button>

				{status.type !== "idle" && (
					<div className={`status-message ${status.type}`}>
						{status.message}
					</div>
				)}
			</form>
		</div>
	);
}
