<script>
    import PeopleData from "../../data/people.json";
    export let theProps = "default value";

    let people = PeopleData;
    export let showModal = false;

    function handleClick(deleteId) {
        //Remove the person by id
        people = people.filter((savePerson) => savePerson.id != deleteId);
    }

    function modalTextHandle() {
        showModal = !showModal;
    }
</script>

{#if showModal}
    <div class="backdrop" class:promo={showModal} on:click>
        <div class="modal">
            <h1>The list of people {theProps}</h1>
        </div>
    </div>
    <ul>
        {#each people as person}
            <li>
                <table>
                    <tr><th> Id: {person.id}</th></tr>
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
<button on:click={modalTextHandle}>
    {showModal ? `Hide` : `Show`}
</button>

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: dodgerblue;
    }

    .promo .modal h1 {
        color: white;
    }

    .promo {
        background: rgba(255, 255, 255, 0.5);
    }
</style>
