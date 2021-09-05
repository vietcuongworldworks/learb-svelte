<script>
    import PeopleData from "../../data/people.json";
    export let theProps = "default value";

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

<div class="backdrop" class:promo={showModal}>
    <div class="modal">
        <h1>The list of people {theProps}</h1>
    </div>
</div>
<button on:click={modalTextHandle}>
    {showModal ? `Hide` : `Show`}
</button>
{#if showModal}
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

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        /* position: fixed; */
        background: rgba(0, 0, 0, 0.8);
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: auto;
        text-align: center;
        background: white;
    }

    .promo {
        background: white;
    }

    .promo .modal {
        background: dodgerblue;
    }

    .promo .modal h1 {
        color: white;
    }
</style>
