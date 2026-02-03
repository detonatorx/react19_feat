import { use } from "react";
import { User, fetchUsers } from "../../api/api";

interface UsersListProps {
	usersPromise: Promise<User[]>;
	onSelectUser: (userId: number) => void;
	selectedUserId: number | null;
}

export default function UsersList({
	usersPromise,
	onSelectUser,
	selectedUserId,
}: UsersListProps) {
	const users = use(usersPromise);

	return (
		<div className="users-list">
			<h3>Список пользователей:</h3>
			<ul className="users-grid">
				{users.map((user) => (
					<li
						key={user.id}
						className={`user-card ${selectedUserId === user.id ? "selected" : ""}`}
						onClick={() => onSelectUser(user.id)}
					>
						<strong>{user.name}</strong>
						<span className="username">@{user.username}</span>
						<span className="email">{user.email}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
