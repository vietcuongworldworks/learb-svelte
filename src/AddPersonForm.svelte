<script>
    let id = 0;
    let name = "Vietcuong";
    let color = "blue";
    let age = 27;
    let flag = [];

    let type;

    function handleSubmit() {
        console.log(id, name, color, age);
        console.log(flag);
        console.log(type);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="number" placeholder="id" bind:value={id} />
    <input type="text" placeholder="name" bind:value={name} />
    <input type="text" placeholder="color" bind:value={color} />
    <input type="number" placeholder="age" bind:value={age} />

    <input type="checkbox" bind:group={flag} value="Flag 01" /> Flag 01
    <input type="checkbox" bind:group={flag} value="Flag 02" /> Flag 02

    <label for={type}>Type:</label>
    <select bind:value={type}>
        <option value="Speed">Speed</option>
        <option value="Wild">Wild</option>
        <option value="Wild">Technic</option>
        <option value="Wild">Deadheat</option>
        <option value="Wild">Tridoron</option>
    </select>
    <button>Add person</button>
</form>

<style>
    label {
        position: fixed;
    }
</style>
