export interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

export interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUsers = async (): Promise<User[]> => {
	await delay(1000);
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!response.ok) throw new Error("Failed to fetch users");
	return response.json();
};

export const fetchPosts = async (userId: number): Promise<Post[]> => {
	await delay(800);
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
	);
	if (!response.ok) throw new Error("Failed to fetch posts");
	return response.json();
};
