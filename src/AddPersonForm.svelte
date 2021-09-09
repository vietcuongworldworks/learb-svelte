<script>
    let id = 0;
    let name = "Vietcuong";
    let color = "blue";
    let age = 27;

    let flag1 = false;
    let flag2 = false;

    let flag = [];

    function handleSubmit() {
        console.log(id, name, color, age);
        console.log(flag1, flag2);
        console.log(flag);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="number" placeholder="id" bind:value={id} />
    <input type="text" placeholder="name" bind:value={name} />
    <input type="text" placeholder="color" bind:value={color} />
    <input type="number" placeholder="age" bind:value={age} />

    <input
        type="checkbox"
        bind:group={flag}
        bind:checked={flag1}
        value="Flag 01"
    />
    Flag 01
    <input
        type="checkbox"
        bind:group={flag}
        bind:checked={flag2}
        value="Flag 02"
    />
    Flag 02

    <button>Add person</button>
</form>

<style>
</style>
