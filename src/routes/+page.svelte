<script>
	import EventCard from '$lib/components/EventCard.svelte';

	let { data } = $props();
</script>

{#if data.session}
	<h1>Welcome, {data.session.user?.name}</h1>

	<section>
		<h2>Your upcoming events</h2>
		{#if data.userEvents && data.userEvents.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each data.userEvents as event}
					<EventCard {event} />
				{/each}
			</div>
		{:else}
			<p>
				You have no upcoming events. Explore and subscribe to events to see them
				here!
			</p>
		{/if}
	</section>

	<section>
		<h2>Campus events</h2>
		{#if data.campusEvents && data.campusEvents.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each data.campusEvents as event}
					<EventCard {event} />
				{/each}
			</div>
		{:else}
			<p>No events found for your campus.</p>
		{/if}
	</section>
{:else}
	<p>Please sign in to see your events.</p>
{/if}
