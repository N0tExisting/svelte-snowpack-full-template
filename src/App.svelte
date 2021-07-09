<script lang='typescript'>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/home.svelte";
	import About from "./routes/about.svelte";

	export let url = "";
</script>

<style lang='scss'>
	:root {
		--nav-height: 6.75vh;
		--rest-height: calc(100vh - var(--nav-height));
	}
	.nav-bar {
		height: var(--nav-height);
		width: 100vw;
		display: flex;
		align-content: center;
		//justify-content: center;
		background-color: #444;
		color: #fff;
		:global(a) {
			--hCol: #fff;
			--dCol: aqua;
			--vCol: deepskyblue;
			--col: var(--dCol);
			color: var(--col);

			height: unset;
			margin-left: .5vh;
			margin-right: .5vh;
			margin-top: calc(var(--nav-height) / 10);
			margin-bottom: calc(var(--nav-height) / 10);
			padding: .2em;

			text-decoration: none;
			background-image: linear-gradient(120deg, var(--dCol) 0%, var(--vCol) 100%);
			background-repeat: no-repeat;
			background-size: 100% 0.1em;
			background-position: 0 100%;
			transition: background-size 0.125s ease-in;
			&:hover {
				color: var(--hCol);
				background-size: 100% 100%;
			}
			&:visited {
				--col: var(--vCol);
			}
		}
	}
	.app-base {
		height: var(--rest-height);
		width: 100vw;
		background-color: #333;
		color: #fff;
	}
</style>

<Router url='{url}'>
	<nav class='nav-bar'>
		<Link to='/'>Home</Link>
		<Link to='about'>About</Link>
	</nav>
	<div class='app-base'>
		<Route path='about'><About /></Route>
		<Route path='/'><Home /></Route>
	</div>
</Router>