<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const HERO_WIDTH = 1024;
	const IMAGE_WIDTH = 512;
</script>

<svelte:head>
	<title>Let&rsquo;s go Lego!</title>
	<meta name="description" content="Let out your iner child!" />
</svelte:head>

<h1 class="screen-reader-text">Home</h1>

<h2>Popular Items</h2>

<style>
	.hero-container {
		display: grid;
		grid-template-rows: '1fr';
		width: var(--max-width-full);
		margin-bottom: var(--spacing-12);
	}

	a {
		text-decoration: none;
	}

	.hero-image,
	.hero-overlay {
		grid-area: 1/1/1/1;
	}

	.hero-heading {
		display: inline-flex;
		margin-top: var(--spacing-6);
		margin-left: var(--spacing-6);
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-black);
		font-size: var(--font-size-4);
	}

	.hero-text {
		display: none;
		margin-top: var(--spacing-6);
		margin-left: var(--spacing-12);
		font-size: var(--font-size-6);
	}

	.hero-heading,
	.hero-text {
		flex-wrap: wrap;
		background-color: var(--colour-dark-overlay);
		border-radius: var(--spacing-1);
		max-width: var(--max-width-full);

		padding: var(--spacing-2) var(--spacing-4);
		color: var(--colour-light);
	}

	@media screen and (min-width: 48rem) {
		.hero-heading {
			margin-left: var(--spacing-12);
			margin-top: var(--spacing-12);
			font-size: var(--font-size-7);
		}

		.hero-text {
			display: flex;
			width: fit-content;
		}
	}
</style>
