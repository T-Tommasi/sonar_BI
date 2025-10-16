<script lang=ts>
    export let hreft: string;
    export let text: string;
</script>

<linkButton>
    <li class="hover:bg-slate-600 hover:text-slate-100 rounded-md">
        <a href="{hreft}" class="block w-full p-2">{text}</a>
    </li>
</linkButton>

<style>
    @import 'tailwindcss';
</style>