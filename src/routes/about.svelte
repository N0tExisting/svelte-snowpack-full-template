
<script lang='typescript'>
	import { onMount } from 'svelte';
	onMount(() => {
		console.log('Mounted About');
		return () => console.log('Unmounted About')
	})
</script>

<style lang='scss'>
	div {
		max-height: var(--rest-height);
		height: var(--rest-height);
		contain: content;
		text-align: center;
	}
</style>

<div>
	<h1>About</h1>
	<h4>A production ready template using Svelte and Snowpack</h4>
</div>
