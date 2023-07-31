<script>
	import SvelteSeo from "svelte-seo";
	
	import { formStore } from './store'
	import Tailwind from './style/Tailwind.svelte';
	import Form from './Form.svelte'
	import Result from './Result.svelte'
	import Footer from './Footer.svelte'

	// local bindings
	let collapsed = $formStore.collapsed
	
	formStore.subscribe(value => {
        collapsed = value.collapsed;
    })
</script>

<style>
	.main {
		@apply relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto;
	}
	.wrapper {
		@apply px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8;
	}
	h1 {
		@apply text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10;
	}
	p {
		@apply max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11;
	}
</style>


<SvelteSeo
  title="Life in Weeks | Yong's Journal"
  description="Life's progress made visible..."
/>
<Tailwind />
<main>
	<div class="main">
		<div class="wrapper">
			<h1>Life in Weeks.</h1>

			{#if !collapsed}
			<p class="text-gray-900 font-bold">My Life in weeks...</p> 
			
			<Form />
			{/if}

			<Result />

			<Footer />
		</div>
	</div>
</main>