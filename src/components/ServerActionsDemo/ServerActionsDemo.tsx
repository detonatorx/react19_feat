import ContactForm from "./ContactForm";
import TodoForm from "./TodoForm";

export default function ServerActionsDemo() {
	return (
		<section className="demo-section">
			<h2>2. Server Actions & Forms</h2>
			<p className="demo-description">
				В React 19 улучшена работа с формами и асинхронными действиями.
				Используется <code>useTransition</code> для управления
				состоянием pending и обработки асинхронных операций в формах.
			</p>

			<div className="demo-content forms-grid">
				<ContactForm />
				<TodoForm />
			</div>

			<div className="info-box">
				<strong>Преимущества:</strong>
				<ul>
					<li>Встроенная поддержка асинхронных действий в формах</li>
					<li>
						Автоматическое управление состоянием pending через
						useTransition
					</li>
					<li>Простая обработка ошибок и успешных результатов</li>
					<li>Оптимистичные обновления UI с плавными переходами</li>
					<li>Нативная интеграция с FormData API</li>
				</ul>
			</div>
		</section>
	);
}
