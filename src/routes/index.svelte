<script lang="ts">
	import { Button, TextBlock, IconButton } from "$lib";

	import { PageSection, CopyBox, HeroCard, Metadata } from "$site/lib";

	import Box from "@fluentui/svg-icons/icons/box_16_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Open from "@fluentui/svg-icons/icons/open_16_regular.svg?raw";

	let exampleCount = 0;

	const example = `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> TextBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@riversidevalley/fluid"</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token string">"@riversidevalley/fluid/theme.css"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>display<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token language-javascript"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBlock</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>accent<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token operator">++</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Increase Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Reset Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>`;
</script>

<Metadata
	title="Fluid"
	description="A UI framework for web based on Microsoft Fluent UI 🎨🏗️"
/>

<PageSection id="hero-section">
	<div class="hero-contents">
		<h1>Fluid Framework</h1>
		<p>A UI framework for web based on Microsoft Fluent UI 🎨🏗️</p>
		<div class="buttons-spacer">
			<Button variant="accent" href="/docs">Get Started</Button>
			<Button
				href="https://github.com/RiversideValley/Fluid.Framework"
				target="_blank"
				rel="noreferrer noopener">Source Code</Button
			>
		</div>
	</div>

	<div class="hero-cards">
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">1. Install</TextBlock>
				<IconButton
					href="https://npmjs.com/package/@riversidevalley/fluid"
					target="_blank"
					rel="noreferrer noopener"
				>
					{@html Box}
				</IconButton>
			</svelte:fragment>

			<TextBlock>npm</TextBlock>
			<CopyBox value="npm i --save-dev @riversidevalley/fluid" />

			<TextBlock>using pnpm</TextBlock>
			<CopyBox value="pnpm i --save-dev @riversidevalley/fluid" />

			<TextBlock>...or with yarn</TextBlock>
			<CopyBox value="yarn add --dev @riversidevalley/fluid" />

			<Button variant="accent">Learn More</Button>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">2. Build</TextBlock>
				<IconButton href="/docs">
					{@html Book}
				</IconButton>
			</svelte:fragment>

			<div class="editor-body">
				<ul class="editor-tabs">
					<li>index.svelte</li>
				</ul>
				<div class="editor">
					<aside class="line-numbers">
						{#each example.split(/\r\n|\r|\n/) as line, i}
							<span>{i + 1}</span>
						{/each}
					</aside>
					<pre>
                        <code>
                            {@html example}
                        </code>
                    </pre>
				</div>
			</div>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">3. View</TextBlock>
				<IconButton
					href="https://svelte.dev/repl/b90fb12e06e84aabb303121f713d1296"
					target="_blank"
					rel="noreferrer noopener"
				>
					{@html Open}
				</IconButton>
			</svelte:fragment>
			<div class="example-app">
				<TextBlock variant="display">{exampleCount}</TextBlock>
				<div>
					<Button variant="accent" on:click={() => (exampleCount += 1)}
						>Increase Count</Button
					>
					<Button on:click={() => (exampleCount = 0)}>Reset Count</Button>
				</div>
			</div>
		</HeroCard>
	</div>
</PageSection>

<style lang="scss">
	@use "src/site/styles/pages/home";
</style>
