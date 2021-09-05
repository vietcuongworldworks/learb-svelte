<script>
    import PeopleData from "../../data/people.json";

    let people = PeopleData;
    let showModal = true;

    function handleClick(deleteId) {
        //Remove the person by id
        people = people.filter((savePerson) => savePerson.id != deleteId);
    }

    function modalTextHandle() {
        showModal = !showModal;
    }
</script>

<div>
    <h1>The list of people</h1>
    <button on:click={modalTextHandle}>{showModal ? `hide` : `show`}</button>
    {#if showModal}
        <ul>
            {#each people as person}
                <li>
                    <table>
                        <tr>Id: {person.id}</tr>
                        <tr>Name: {person.name}</tr>
                        <tr>Age: {person.age}</tr>
                        <tr>
                            <button on:click={() => handleClick(person.id)}>
                                Remove
                            </button>
                        </tr>
                    </table>
                </li>
            {:else}
                <!-- if peole is empty -->
                <p>No information.</p>
            {/each}
        </ul>
    {/if}
</div>

<style>
</style>
