import styles from "./styles.module.css";

const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>BuddyBuy</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		<div className={styles.container}>
			<div className={styles.home_container}>
				<h1 className={styles.heading}>Welcome to  Buddy Buy!</h1>
				
			</div>
		</div>
		</div>
	);
};

export default Home;