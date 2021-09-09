<script>
    let id = 0;
    let name = "Vietcuong";
    let color = "blue";
    let age = 27;

    let type;

    let flag1 = false;
    let flag2 = false;

    function handleSubmit() {
        console.log(id, name, color, age);
        console.log(flag1, flag2);
        console.log(type);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="number" placeholder="id" bind:value={id} />
    <input type="text" placeholder="name" bind:value={name} />
    <input type="text" placeholder="color" bind:value={color} />
    <input type="number" placeholder="age" bind:value={age} />

    <input type="checkbox" bind:checked={flag1} /> Flag 1
    <input type="checkbox" bind:checked={flag2} /> Flag 2

    <div>
        <label for={type}>Type:</label>
        <select bind:value={type}>
            <option value="Speed">Speed</option>
            <option value="Wild">Wild</option>
            <option value="Technic">Technic</option>
            <option value="Deadheat">Deadheat</option>
            <option value="Tridoron">Tridoron</option>
        </select>
    </div>
    <button>Add person</button>
</form>

<style>
    label {
        display: inline;
    }
</style>
