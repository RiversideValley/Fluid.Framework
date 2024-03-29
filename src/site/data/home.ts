export const homeExampleSrc = `<script>
	import { Button, TextBlock } from "@riversidevalley/fluid";
	import "@riversidevalley/fluid/theme.css";

	let count = 0;
</script>

<TextBlock variant="display">{count}</TextBlock>
<div>
	<Button variant="accent" on:click={() => count++}>Increase Counter</Button>
	<Button on:click={() => count = 0}>Reset Counter</Button>
</div>`;
