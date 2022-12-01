export default () => {

	return `
		<style>
			article.wrapper {
				--light-grey: #eee;
				--lighter-grey: #ddd;
				--darker-grey: #6c757d;
				--dark-grey: #777;
				--teal: teal;
				--light-teal: #18d1d1;

				width: 100%;
				margin: 0 auto;
				box-sizing: border-box;
			}
			
			article * {
				padding: 0;
				margin: 0;
			}

			p {
				margin-bottom: 1px;
			}

			header.header-banner {
				width: 100%;
			}

			header.header-banner .header-title {
				font-size: 20px;
				color: var(--teal);
				margin-bottom: 7px;
			}

			header.header-banner img.banner-img {
				width: 100%;
				display: block;
				margin-bottom: 3px;
			}

			.header-text {
				width: 100%;
				font-size: 18px;
				color: var(--darker-grey);
			}

			p a {
				padding-top: 2px;
				font-size: 17px;
				text-decoration: none;
				color: var(--light-teal);
				transition: color .3s ease;
			}

			p a:hover {
				color: var(--teal);
			}
		</style>
	
		<article class="wrapper">
			<header class="header-banner">
				<img src="" alt="" class="banner-img"/>
				<div class="header-title">
					<h1>blogChat</h1>
				</div>
			</header>
			<div class="header-text">
				<p>Connect with other people, even from ther othe side of the world.</p>
				<p><a href="#">Read more...</a></p>
				</div>
		</article>
	`;
}