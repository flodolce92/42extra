<script>
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import favicon from '$lib/assets/favicon.svg';

	let { user } = $props();
</script>

<header>
	<nav class="flex items-center justify-between px-6 py-3">
		<a href="/" class="text-xl font-bold">
			<img src={favicon} alt="Logo" class="h-6 w-6 inline-block mr-2" />
		</a>

		<Button variant="outline" class="w-64">Ctrl K</Button>

		<a href="/profile">
			<Avatar.Root>
				<Avatar.Image src={user?.image} alt={user?.name} />
				<Avatar.Fallback>
					{user?.name ? user.name[0] : 'U'}
				</Avatar.Fallback>
			</Avatar.Root>
		</a>
	</nav>
</header>
