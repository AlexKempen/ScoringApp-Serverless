import type { PageLoad } from './$types';
import type { PitScouting } from '@firstteam102/scoutradioz-types';

export const load: PageLoad = async ({ fetch }) => {
	const all: PitScouting[] = await (await fetch('/api/assignments/pit')).json();

	return { all };
};
