<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Categories</title>
	<meta name="description" content="All our lovely lego products." />
</svelte:head>

<style>
	[aria-current='true'] {
		background-color: var(--colour-theme);
	}

	h1 {
		margin-top: var(--spacing-12);
	}
</style>
