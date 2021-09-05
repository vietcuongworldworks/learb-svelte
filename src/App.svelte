<script>
	import Modal from "./Modal/Modal.svelte";
</script>

<main>
	<Modal theProps={`in here!`} />
</main>

<style>
	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
