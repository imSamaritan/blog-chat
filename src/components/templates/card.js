export default () => {
	return `
		<style>
		.card {
			width: 100%;
			height: 100%;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 7px;
			box-shadow: 0 0 3px rgba(0,0,0,.3);
			transition: box-shadow .5s ease;
		}

		.card:hover {
			box-shadow: 0 0 4px rgba(0,0,0,.5);
		}
		</style>
	
		<article class="card">
			<slot/>
		</article>
	`;
}