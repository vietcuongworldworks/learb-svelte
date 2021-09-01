<script>
	// export let name;
	let people = [
		{ name: "vietcuong", color: "red", age: 27, id: 1 },
		{ name: "pham", color: "blue", age: 28, id: 2 },
		{ name: "pham vietcuong", color: "green", age: 26, id: 3 },
	];
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
