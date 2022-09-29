<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Search icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 25;

	/* some libraries add an id which can result in duplicate ids and that can impact accessibility so
	you can override with a random id if you face this issue */
	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'uil',
		icons: {
			search: {
				body: '<path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/>'
			}
		},
		lastModified: 1656183367,
		width: 24,
		height: 24
	});

	// https://api.iconify.design/uil.json?icons=search
</script>

<Icon icon="uil:search" {ariaHidden} aria-label={label} color={colour} {width} {id} />
