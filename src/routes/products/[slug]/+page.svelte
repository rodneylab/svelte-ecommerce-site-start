<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<style>
	h1 {
		padding: var(--spacing-8) var(--spacing-6);
	}

	h2 {
		margin-top: var(--spacing-0);
	}

	h3 {
		margin-bottom: var(--spacing-0);
		font-weight: var(--font-weight-normal);
	}

	a {
		color: var(--colour-dark);
	}

	.product {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'image'
			'details';
		row-gap: var(--spacing-6);
		max-width: 32rem;
		margin: var(--spacing-6) auto var(--spacing-12);
		border-radius: var(--spacing-1);
		padding: var(--spacing-4);
	}

	.image {
		grid-area: image;
	}

	.details {
		grid-area: details;
		height: 100%;
	}

	@media screen and (min-width: 64rem) {
		.product {
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'image details';
			column-gap: var(--spacing-12);

			max-width: var(--max-width-full);
		}

		.details {
			display: flex;
			flex-direction: column;
		}
		.categories-container {
			margin-top: auto;
		}
	}

	.categories-container nav {
		margin: var(--spacing-2) var(--spacing-0) var(--spacing-6);
	}

	.category-items {
		display: flex;
		align-content: flex-start;
		max-width: var(--max-width-full);
		margin: var(--spacing-8) var(--spacing-0) var(--spacing-12);
	}

	.product .category {
		box-shadow: none;
		border-style: none;
		background-color: transparent;
		padding: var(--spacing-1) var(--spacing-0);
		margin: var(--spacing-0) var(--spacing-2) var(--spacing-2) var(--spacing-0);
		font-size: var(--font-size-1);
	}

	.category a {
		color: var(--colour-dark);
	}

	.product-about {
		margin-top: var(--spacing-6);
		min-height: var(--spacing-32);
	}
	.description {
		font-size: var(--font-size-2);
	}
	.product-price-add {
		display: flex;
		align-items: baseline;
	}
	.product-price {
		font-size: var(--font-size-4);
	}
	.product-price-add button {
		display: inline-flex;
		align-items: center;
		margin-left: auto;
		margin-bottom: var(--spacing-6);
		padding: var(--spacing-2) var(--spacing-4);
		background: var(--colour-light-tint-50);
		border: var(--spacing-px) solid var(--colour-dark);
		border-radius: var(--spacing-1);
		box-shadow: var(--shadow-elevation-low);
		font-weight: var(--font-weight-medium);
	}

	.icon {
		margin-left: var(--spacing-1);
	}

	.product-price-add button:active {
		box-shadow: none;
		transform: translateY(var(--spacing-px-2));
	}

	.product-price-add :is(button:focus, button:hover) {
		background: var(--colour-theme);
	}
</style>
