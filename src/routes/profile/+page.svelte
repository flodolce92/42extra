<script>
	import { page } from '$app/state';

	console.log('Page data:', page.data);
</script>

<div>
	{#if page.data.session}
		<p>Welcome back, {page.data.session.user?.name}!</p>
		<div class="user-stats">
			{#if page.data.userStats}
				<h2>Your Stats</h2>
				<div class="stats-grid">
					{#each Object.entries(page.data.userStats) as [key, value]}
						<div class="stat-item">
							<span class="stat-label">{key}:</span>
							<span class="stat-value">{value}</span>
						</div>
					{/each}
				</div>
			{:else}
				<p>No stats available</p>
			{/if}
		</div>
	{:else}
		<p>Please sign in to access more features.</p>
	{/if}
</div>
