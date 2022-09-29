<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Svelte icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 25;

	/* some libraries add an id which can result in duplicate ids and that can impact accessibility so
	you can override with a random id if you face this issue */
	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'teenyicons',
		icons: {
			'svelte-outline': {
				body: '<path fill="none" stroke="currentColor" d="m9.625 8.357l-5.088 3.18m2.968-1.855a3.5 3.5 0 0 1-3.71-5.937l4.241-2.65A3.5 3.5 0 0 1 12.405 6.5M7.536 5.296a3.5 3.5 0 0 1 3.71 5.936l-4.24 2.65A3.5 3.5 0 0 1 2.614 8.5m2.8-1.88l5.09-3.179"/>'
			}
		},
		lastModified: 1656267513,
		width: 15,
		height: 15
	});

	// https://api.iconify.design/teenyicons.json?icons=svelte-outline
</script>

<Icon
	icon="teenyicons:svelte-outline"
	{ariaHidden}
	aria-label={label}
	color={colour}
	{width}
	{id}
/>
