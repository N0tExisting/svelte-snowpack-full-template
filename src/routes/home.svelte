<script lang='typescript'>
	import {onMount} from 'svelte';
	let count: number = 0;
	onMount(() => {
		console.log('Mouted Home')
		const interval = setInterval(() => count++, 1000);
		return () => {
			clearInterval(interval);
			console.log('Unmouted Home');
		};
	});
</script>

<style lang="scss">
	:global(body) {
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.App {
		text-align: center;
		p {
			margin: 0.4rem;
		}
		code {
			background: #0002;
			padding: 4px 8px;
			border-radius: 4px;
		}
	}
	.App-header {
		min-height: var(--rest-height);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
	}
	.App-link {
		color: #ff3e00;
	}
	.App-logo {
		height: 36vmin;
		pointer-events: none;
		margin-bottom: 3rem;
		animation: App-logo-scale infinite 3.2s ease-in-out normal;
	}
	@keyframes App-logo-scale {
		0% {
			transform: scale(.8)  rotate(0deg);
		}
		50% {
			transform: scale(1.2)  rotate(360deg);
		}
		100% {
			transform: scale(.8)  rotate(720deg);
		}
	}
</style>

<div class="App">
	<header class="App-header">
		<img src="/assets/logo.svg" class="App-logo" alt="logo" />
		<p>Edit <code>src/App.svelte</code> and save to reload.</p>
		<p>Page has been open for <code>{count}</code> seconds.</p>
		<p>
			<a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
			Learn Svelte
			</a>
		</p>
	</header>
</div>
