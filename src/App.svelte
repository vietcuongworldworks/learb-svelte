<script>
	import Modal from "./Modal/Modal.svelte";
	import PeopleData from "../data/people.json";

	let people = PeopleData;
	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	const handleClick = (deleteId) => {
		//Remove the person by id
		people = people.filter((savePerson) => savePerson.id != deleteId);
	};
</script>

<Modal
	message={`The modal!`}
	{showModal}
	on:click={toggleModal}
	isPromo={true}
/>
<main>
	<button on:click={toggleModal}>Open modal</button>
	<dl>
		{#each people as person}
			<dt><h4>Id: {person.id}</h4></dt>
			<dd>Name: {person.name}</dd>
			<dd>Age: {person.age}</dd>
			<dd>
				<button on:click={() => handleClick(person.id)}>
					Remove
				</button>
			</dd>
		{:else}
			<!-- if peole is empty -->
			<p>No information...</p>
		{/each}
	</dl>
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
