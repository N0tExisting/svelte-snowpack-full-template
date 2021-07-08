<script lang='typescript'>
	import {onMount} from 'svelte';
	let count: number = 0;
	onMount(() => {
		const interval = setInterval(() => count++, 1000);
		return () => {
			clearInterval(interval);
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
		background-color: #f9f6f6;
		color: #333;
		min-height: 100vh;
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
		animation: App-logo-spin infinite 1.6s ease-in-out alternate;
	}
	@keyframes App-logo-spin {
		from {
			transform: scale(1) rotate(0);
		}
		to {
			transform: scale(1.06) rotate(360);
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
