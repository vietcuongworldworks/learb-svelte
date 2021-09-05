<script>
	import Modal from "./Modal/Modal.svelte";

	let showModal = false;
	function modalHandle() {
		showModal = !showModal;
	}
</script>

<main>
	<Modal theProps={`in here!`} {showModal} on:click={modalHandle} />
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
