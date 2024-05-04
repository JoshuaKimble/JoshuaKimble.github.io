<script>
	let people = [
		{ name: 'Everett', coins: 0 },
		{ name: 'Ellison', coins: 0 },
		{ name: 'River', coins: 0 }
	];

	function addCoin(person) {
		person.coins += 1;
	}
</script>

<div class="container">
	<h1>Add Coins</h1>
	{#each people as person}
		<div class="person">
			<span>{person.name}: {person.coins} coins</span>
			<button on:click={() => addCoin(person)}>Add Coin</button>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
	}
	.person {
		margin-bottom: 10px;
	}
	button {
		margin-left: 10px;
	}
</style>
