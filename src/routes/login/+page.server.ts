import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		// TODO log the user in
		console.log('hello there world');
	}
} satisfies Actions;
