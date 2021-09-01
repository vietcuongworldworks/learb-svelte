<script>
	export let name;
	let text = "first text";
	let para = "blue";

	function handleClick() {
		text = "#";
		if (para === "blue") {
			para = "red";
		} else {
			para = "blue";
		}
	}

	// function handleInput(e) {
	// 	text = e.target.value;
	// }
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<p style="background-color: {text};">{text}</p>
	<p class="para" style="--text-color: {para};">Para: {para}</p>
	<button on:click={handleClick}>Change para text color</button>
	<!-- <input type="text" on:input={handleInput} value={text} /> -->
	<input type="text" bind:value={text} />
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
