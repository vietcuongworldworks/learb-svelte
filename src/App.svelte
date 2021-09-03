<script>
	// export let name;
	import PeopleData from "../data/people.json";
	let people = PeopleData;

	function handleClick(deleteId) {
		//Remove the person by id
		people = people.filter((savePerson) => savePerson.id != deleteId);
	}
</script>

<main>
	<ul>
		{#each people as person}
			<li>
				<p>
					<b>Id: {person.id}</b><br />
					Name: {person.name}<br />
					Age: {person.age}
				</p>
				<button on:click={() => handleClick(person.id)}>Remove</button>
			</li>
		{:else}
			<!-- if peole is empty -->
			<p>No information.</p>
		{/each}
	</ul>
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
