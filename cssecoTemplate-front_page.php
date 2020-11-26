<?php
/**
  * Template Name: Front Page
  * @package cssecoST
  * cssecoTemplatePage-contact_us.php
  */

get_header('fp'); ?>

			<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section1.php'; ?>			
		</div><!-- /.container -->		
	</div><!-- /.bgfp -->	
	<section id="section1-1" class="pct p-0 d-xl-none">
		<img src="<?php echo get_template_directory_uri(); ?>/dist/imgs/frontpage/header_fp_bg2.jpg" alt="">
	</section>
	<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section2.php'; ?>	
	<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section3.php'; ?>	
	<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section4.php'; ?>	
	<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section5.php'; ?>	
  <section class="reliability p-0">		
		<div class="foreground_txt reliability_txt">reliability</div>		
		<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section6.php'; ?>		
		<?php require get_template_directory() . '/includes/front/template-parts/fp/fp_section7.php'; ?>		
	</section>	
	
<?php get_footer(); ?>