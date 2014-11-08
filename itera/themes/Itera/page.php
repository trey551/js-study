<?php get_header(); ?>

<?php get_sidebar(); ?>
<div class="content">
	<?php
		if ( is_front_page() && twentyfourteen_has_featured_posts() ) {
			get_template_part( 'featured-content' );
		}
	?>

	<section>
		<?php
			while ( have_posts() ) : the_post();
				get_template_part( 'content', 'page' );
			endwhile;
		?>
	</section>
</div>

<?php get_footer(); ?>



