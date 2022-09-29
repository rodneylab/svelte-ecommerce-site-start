import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	try {
		return {};
	} catch (err: unknown) {
		throw error(500, err as string);
	}
};
