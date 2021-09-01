<script>
	export let name;
	let text = "first text";
	let colorText = "blue";

	let firstName = "Vietcuong";
	let lastName = "Pham";

	$: fullName = `${firstName} ${lastName}`;
	$: {
		console.log(text);
		console.log(colorText);
	}

	function handleClick() {
		console.log(fullName);
	}
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<main>
	<h1>Hello {name}!</h1>
	<p class="para" style="--text-color: {colorText}">{colorText}</p>
	<input type="text" bind:value={colorText} />

	<p>{fullName}</p>
	<input type="text" bind:value={firstName} />
	<input type="text" bind:value={lastName} />
	<button on:click={handleClick}>console.log</button>
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
