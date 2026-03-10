<!-- <script lang="ts">
import favicon from "$lib/assets/favicon.svg";

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
 -->

<script lang="ts">
	import '../app.css';
	import { page } from '$app/state'; // SvelteKit 2.12+ 建议写法
	let { children } = $props();

	// 导航项配置
	const navItems = [
		{ name: '首页', href: '/' },
		{ name: '播客列表', href: '/shows' },
		{ name: '关于', href: '/about' }
	];
</script>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
		<div class="container flex h-16 items-center justify-between">
			<div class="flex items-center gap-6">
				<a href="/" class="font-bold text-xl tracking-tight">Syntax<span class="text-primary">.mine</span></a>
				<nav class="hidden md:flex gap-4">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="text-sm font-medium transition-colors hover:text-primary {page.url.pathname === item.href ? 'text-foreground' : 'text-muted-foreground'}"
						>
							{item.name}
						</a>
					{/each}
				</nav>
			</div>
			</div>
	</header>

	<main class="flex-1 container py-6">
		{@render children()}
	</main>

	<footer class="border-t py-6">
		<div class="container text-center text-sm text-muted-foreground">
			© {new Date().getFullYear()} Replicated Syntaxfm Project
		</div>
	</footer>
</div>