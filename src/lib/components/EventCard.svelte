<script lang="ts">
	import type { FortyTwoEvent } from '$lib/types/fortytwo';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { event }: { event: FortyTwoEvent } = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{event.name}</Card.Title>
		<Card.Description>{event.description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Location: {event.location}</p>
		<p>Start: {new Date(event.begin_at).toLocaleString()}</p>
		<p>End: {new Date(event.end_at).toLocaleString()}</p>
		<Badge variant="secondary">{event.kind}</Badge>
		<p>Subs: {event.nbr_subscribers}</p>
	</Card.Content>
</Card.Root>
