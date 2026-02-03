interface FormData {
	name: string;
	email: string;
	message: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const submitContactForm = async (
	formData: FormData,
): Promise<{ success: boolean; message: string }> => {
	await delay(2000);

	if (Math.random() > 0.8) {
		throw new Error("Ошибка сервера. Попробуйте позже.");
	}

	console.log("Form submitted:", formData);

	return {
		success: true,
		message: `Спасибо, ${formData.name}! Ваше сообщение получено.`,
	};
};

export const createTodo = async (
	text: string,
): Promise<{ id: number; text: string; completed: boolean }> => {
	await delay(1000);

	return {
		id: Date.now(),
		text,
		completed: false,
	};
};
