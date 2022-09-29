<script lang="ts">
	import SvelteIcon from './Icons/Svelte.svelte';
</script>

<header>
	<a class="brand-desktop" href="/" data-sveltekit-prefetch>SvelteKit eCommerce Store</a>
	<a class="brand" href="/" data-sveltekit-prefetch><SvelteIcon /> eCommerce</a>
	<nav>
		<a class="nav-item" href="/categories/featured" data-sveltekit-prefetch>Products</a>
		<a class="nav-item" href="/products" data-sveltekit-prefetch>Search</a>
	</nav>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'brand'
			'nav'
			'checkout';
		row-gap: var(--spacing-6);
		min-height: 200px;

		flex-direction: column;
		align-items: baseline;
		background-color: var(--colour-dark);
		box-shadow: var(--shadow-elevation-medium);
		border-radius: var(--spacing-px-2);
		margin: var(--spacing-6) var(--spacing-0) var(--spacing-8);
		padding: var(--spacing-8) var(--spacing-6);
		color: var(--colour-theme);
		font-family: var(--font-family-heading);
		font-size: var(--font-size-2);
	}

	@media screen and (min-width: 48rem) {
		header {
			grid-template-columns: auto auto;
			grid-template-areas:
				'brand brand'
				'nav checkout';
			min-height: unset;
		}
	}

	@media screen and (min-width: 64rem) {
		header {
			grid-template-columns: auto 1fr auto;
			grid-template-areas: 'brand nav checkout';
			flex-direction: row;
		}
		nav {
			margin-left: auto;
		}
	}

	header a {
		color: var(--colour-theme);
	}

	.brand {
		grid-area: brand;
		width: var(--max-width-full);
		font-size: var(--font-size-4);
	}

	.brand-desktop {
		display: none;
		font-size: var(--font-size-3);
	}

	.brand,
	.brand-desktop {
		font-weight: var(--font-weight-black);
		text-decoration: none;
		letter-spacing: var(--spacing-px);
		width: var(--max-width-full);
	}

	:is(.brand, .brand-desktop):focus,
	:is(.brand, .brand-desktop):hover {
		text-decoration: underline;
	}

	@media screen and (min-width: 48rem) {
		.brand {
			display: none;
		}
		.brand-desktop {
			display: flex;
		}
	}

	nav {
		grid-area: nav;
	}
	.nav-item {
		padding-right: var(--spacing-4);
	}

	@media screen and (min-width: 64rem) {
		nav {
			margin-left: auto;
		}
	}

	.checkout {
		grid-area: checkout;
		display: flex;
	}
	.snipcart-checkout {
		font-variant: small-caps;
		color: var(--colour-brand);
		margin-left: auto;
	}
	button {
		background-color: transparent;
		border-style: none;
		font-weight: var(--font-weight-medium);
		color: inherit;
	}
	.icon {
		display: inline-block;
	}
</style>
