<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Shopping basket icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 24;

	/* some libraries add an id which can result in duplicate ids and that can impact accessibility so
	you can override with a random id if you face this issue */
	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'uil',
		icons: {
			'shopping-basket': {
				body: '<path fill="currentColor" d="M14 18a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm-4 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm9-12h-1.38l-1.73-3.45a1 1 0 1 0-1.78.9L15.38 6H8.62l1.27-2.55a1 1 0 0 0-1.78-.9L6.38 6H5a3 3 0 0 0-.92 5.84l.74 7.46a3 3 0 0 0 3 2.7h8.38a3 3 0 0 0 3-2.7l.74-7.46A3 3 0 0 0 19 6Zm-1.81 13.1a1 1 0 0 1-1 .9H7.81a1 1 0 0 1-1-.9L6.1 12h11.8ZM19 10H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/>'
			}
		},
		lastModified: 1656183367,
		width: 24,
		height: 24
	});

	// https://api.iconify.design/uil.json?icons=shopping-basket
</script>

<Icon icon="uil:shopping-basket" {ariaHidden} aria-label={label} color={colour} {width} {id} />
