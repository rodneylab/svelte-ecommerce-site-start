<script lang="ts">
	import { page } from '$app/stores';

	const {
		status,
		error,
	} = $page;

	const {message = ''}  = error ?? {};
	const title = `${status}: ${message}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<h1>{title}</h1>
<p>
	{message}&hellip; <a aria-label="Return to home page" href="/">Go&nbsp;home?</a>
</p>

<style>
	a {
		color: var(--colour-dark);
	}
</style>