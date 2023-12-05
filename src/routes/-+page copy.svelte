<script>
	let name = 'Bishkek'
  let var2 = `City: ${name}!!! `

  name = 42

  let src1 = 'https://img.lovepik.com/element/40116/9419.png_300.png';
  let src2 = 'https://img.lovepik.com/element/40116/9419.png_300.png';
// .toUpperCase()

  let names = [
    'Друг 1',
    'Друг 2',
    'Друг 3',
    'Друг 4',
  ]

</script>

<h1>Welcome to {name}!!!</h1>
{var2}

<ul>
  {#each names as name}
    <li>{name}</li>
  {/each}
</ul>
<br><br>
<img src={src1} alt="{name} dances." />
<img src={src2} alt="{name} dances." />


<style>
  h1 {
    color: gold;
  }

  /* li {
    display: inline;
  } */

  li {
    list-style: none;
  }
</style>