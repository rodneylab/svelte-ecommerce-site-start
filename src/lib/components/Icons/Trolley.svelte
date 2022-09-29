<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Shopping trolley icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 24;

	/* some libraries add an id which can result in duplicate ids and that can impact accessibility so
	you can override with a random id if you face this issue */
	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'uil',
		icons: {
			'shopping-cart': {
				body: '<path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"/>'
			}
		},
		lastModified: 1656183367,
		width: 24,
		height: 24
	});

	// https://api.iconify.design/uil.json?icons=shopping-cart
</script>

<Icon icon="uil:shopping-cart" {ariaHidden} aria-label={label} color={colour} {width} {id} />
