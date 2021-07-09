<script lang='typescript'>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";

	export let url = "";
</script>

<style lang='scss'>
	:root {
		--nav-height: 10vh;
		--rest-height: calc(100vh - var(--nav-height));
	}
	.nav-bar {
		height: var(--nav-height);
		width: 100vw;
		display: flex;
		background-color: #444;
		color: #fff;
		a {
			color: #00f;
			&:visited {
				color: rgb(20, 129, 255);
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

<Router url="{url}">
	<nav class='nav-bar'>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
	</nav>
	<div class='app-base'>
		<Route path="about" component="{About}" />
		<Route path="/"><Home /></Route>
	</div>
</Router>