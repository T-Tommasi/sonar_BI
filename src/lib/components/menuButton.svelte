<script lang="ts">
	export let href: string;
	export let text: string;
	export let icon: string;

	import Icon from '@iconify/svelte';
</script>

<li
	class="rounded-md transition duration-500 ease-in-out hover:scale-101 hover:bg-slate-300 hover:text-slate-600"
>
	<a {href} class="flex w-full items-center gap-2 p-2">
		<Icon {icon} />
		<span>{text}</span>
	</a>
</li>

<style>
	@import 'tailwindcss';
</style>
