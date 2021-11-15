import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Stash That Cash</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Dashboard</Link>
			<Link activeClassName={style.active} href="/investing">Investing</Link>
			<Link activeClassName={style.active} href="/cars">Cars</Link>
		</nav>
	</header>
);

export default Header;
