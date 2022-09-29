<script lang="ts">
	const COPYRIGHT_ENTITY = '\u00a9'; // (c)
</script>

<footer>
	<div class="intellectual-property-information">
		Created by <a
			aria-label="Open the Rodney Lab site"
			href="https://rodneylab.com/"
			target="_blank"
			rel="noopener noreferrer">Rodney Lab</a
		>. Copyright {COPYRIGHT_ENTITY} 2022.
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--max-width-wrapper);
		background-color: var(--colour-alt);
		box-shadow: var(--shadow-elevation-medium);
		margin: var(--spacing-40) var(--spacing-0) var(--spacing-6);
		padding: var(--spacing-8) var(--spacing-6);
		color: var(--colour-dark);
		font-family: var(--font-family-heading);
		font-size: var(--font-size-2);
	}

	.intellectual-property-information {
		line-height: var(--line-height-relaxed);
	}

	a {
		color: var(--colour-dark);
	}
</style>
