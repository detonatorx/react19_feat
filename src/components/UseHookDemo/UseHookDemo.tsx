import { Suspense, useState } from "react";
import UsersList from "./UsersList";
import PostsList from "./PostsList";
import { fetchUsers, fetchPosts } from "../../api/api";

export default function UseHookDemo() {
	const [usersPromise] = useState(() => fetchUsers());
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
	const [postsPromise, setPostsPromise] = useState<Promise<any> | null>(null);

	const handleSelectUser = (userId: number) => {
		setSelectedUserId(userId);
		setPostsPromise(fetchPosts(userId));
	};

	return (
		<section className="demo-section">
			<h2>1. use() Hook для Data Fetching</h2>
			<p className="demo-description">
				Новый хук <code>use()</code> позволяет читать значение из
				Promise или Context. При использовании с Promise, он
				автоматически интегрируется с Suspense.
			</p>

			<div className="demo-content">
				<Suspense
					fallback={
						<div className="loading">Загрузка пользователей...</div>
					}
				>
					<UsersList
						usersPromise={usersPromise}
						onSelectUser={handleSelectUser}
						selectedUserId={selectedUserId}
					/>
				</Suspense>

				{postsPromise && (
					<Suspense
						key={selectedUserId}
						fallback={
							<div className="loading">Загрузка постов...</div>
						}
					>
						<PostsList postsPromise={postsPromise} />
					</Suspense>
				)}
			</div>

			<div className="info-box">
				<strong>Как это работает:</strong>
				<ul>
					<li>
						Компонент использует <code>use(promise)</code> для
						чтения данных
					</li>
					<li>
						Пока Promise не resolve, Suspense показывает fallback
					</li>
					<li>После resolve данные отображаются автоматически</li>
					<li>
						Нет необходимости в useState/useEffect для async данных
					</li>
				</ul>
			</div>
		</section>
	);
}
