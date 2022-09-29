<script lang="ts">
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/normalise.css';
	import '$lib/styles/styles.css';
	import '@fontsource/fira-sans';
	import '@fontsource/montserrat';
	import { afterUpdate } from 'svelte';
	import lazyload from 'vanilla-lazyload';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	afterUpdate(() => {
		document.lazyloadInstance.update();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://app.snipcart.com" />
	<link rel="preconnect" href="https://cdn.snipcart.com" />
</svelte:head>

<div class="container">
	<Header />
	<main class="wrapper">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.wrapper {
		overflow: visible;
		min-height: 100vh;
	}
</style>
