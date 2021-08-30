<script>
	export let name;
	let text = "123 text";
	let para = "blue";

	function handleClick() {
		if (para === "blue") {
			para = "red";
		} else {
			para = "blue";
		}
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<p>{text}</p>
	<p class="para" style="--text-color: {para};">Para: {para}</p>
	<button on:click={() => handleClick()}>Change para text</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.para {
		color: var(--text-color);
	}
</style>
