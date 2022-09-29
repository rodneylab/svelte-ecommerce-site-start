import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ params }) {
	try {
		const { slug } = params;

		return {};
	} catch (err: unknown) {
		throw error(500, err as string);
	}
};
