import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	try {
		return {};
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string };
		if (httpError.status && httpError.message) {
			throw error(httpError.status, httpError.message);
		}
		throw error(500, err as string);
	}
};
