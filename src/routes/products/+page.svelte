<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Products</title>
	<meta name="description" content="All our lovely lego products." />
</svelte:head>

<h1>Product categories</h1>

<style>
	h1 {
		margin-top: var(--spacing-12);
	}

	form {
		display: flex;
		width: fit-content;
		margin: var(--spacing-0) auto;
	}
	form button {
		border: var(--spacing-px-2) solid var(--colour-dark);
		border-radius: var(--spacing-1);
		background-color: var(--colour-light-shade-10);
		vertical-align: middle;
		margin-left: var(--spacing-1);
	}

	input {
		background: var(--colour-light-tint-50);
		border: var(--spacing-px) solid var(--colour-dark);
		border-radius: var(--spacing-1);
		width: calc(24rem - var(--spacing-12));
		font-size: var(--font-size-3);
		text-indent: var(--spacing-2);
	}
</style>
