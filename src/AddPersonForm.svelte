<script>
    let id = 0;
    let name = "Vietcuong";
    let color = "blue";
    let age = 27;

    function handleSubmit() {
        console.log(id, name, color, age);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="number" placeholder="id" bind:value={id} />
    <input type="text" placeholder="name" bind:value={name} />
    <input type="text" placeholder="color" bind:value={color} />
    <input type="number" placeholder="age" bind:value={age} />
    <button>Add person</button>
</form>

<style>
</style>
