<?php
/**
  * @package cssecoST
  * includes/front/enqueue.php
  */

function csseco_load_scripts() {

	$cssecoStyleVer 	= '0.0.0';
	$cssecoScriptsVer = '0.0.0';
	$jqueryVer				= '3.5.1';
	$jqueryUI					= '1.12.1';
	$faVer						= '5.14.0';
	$gsapVer					= '3.5.1';
	$popperVer				= '1.16.1';
	$bsVer						= '4.5.0';
	$slickVer					= '1.8.1';

// --------------------------------------------------------------------------------
// Styles
// --------------------------------------------------------------------------------
	
	// Main styles
	wp_enqueue_style( 'csseco_styles', get_template_directory_uri().'/dist/css/csseco-style.css', array(), 	$cssecoStyleVer, 'all' );

	// Slick slides styles
	wp_enqueue_style( 'slick_slides', get_template_directory_uri().'/vendor/slick_slider/css/slick.css', array(), 	$slickVer, 'all' );
	// wp_enqueue_style( 'slick_slides_theme', get_template_directory_uri().'/vendor/slick_slider/css/slick-theme.css', array(), 	$slickVer, 'all' );

	// animate.css
	wp_enqueue_style( 'animate', get_template_directory_uri().'/vendor/animate.css', array(), '3.7.0', 'all' );

// --------------------------------------------------------------------------------
// Scripts
// --------------------------------------------------------------------------------

	// Deregister jquery
	wp_deregister_script( 'jquery' );
	// Jquery in footer(down)
	wp_register_script( 'jquery', get_template_directory_uri().'/vendor/jquery/jquery.min.js', false, $jqueryVer, true );
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array('jquery'), $jqueryUI, true );

	// FontAwesome
	wp_enqueue_script( 'fa_scripts', 'https://kit.fontawesome.com/a0844add41.js', array('jquery'), $faVer, true );

	// GSAP
	wp_enqueue_script( 'gsap_scripts', get_template_directory_uri().'/vendor/gsap/gsap.min.js', array(), $gsapVer, true );
	
	// GSAP	- ScrollTrigger
	wp_enqueue_script( 'gsap_ScrollTrigger_scripts', get_template_directory_uri().'/vendor/gsap/ScrollTrigger.min.js', array(), $gsapVer, true );

	// GSAP	- TextPlugin 
	wp_enqueue_script( 'gsap_TextPlugin_scripts', get_template_directory_uri().'/vendor/gsap/TextPlugin.min.js', array(), $gsapVer, true );

	// GSAP	- CSSRulePlugin 
	wp_enqueue_script( 'gsap_CSSRulePlugin_scripts', get_template_directory_uri().'/vendor/gsap/CSSRulePlugin.min.js', array(), $gsapVer, true );

	// Popper.js
	// popper.min.js is used for dropdowns, popover and tooltips
	wp_enqueue_script( 'popper', get_template_directory_uri().'/vendor/popper/popper.min.js', array('jquery'), $popperVer, true );

	// Bootstrap.js
	wp_enqueue_script( 'bs_scripts', get_template_directory_uri().'/vendor/bootstrap/js/bootstrap.js', array('jquery'), $slickVer, true );

	// Slick slider
	wp_enqueue_script( 'slick_slider', get_template_directory_uri().'/vendor/slick_slider/js/slick.min.js', array('jquery'), $bsVer, true );

	// Main scripts
	wp_enqueue_script( 'csseco_scripts', get_template_directory_uri().'/dist/js/csseco-scripts.js', array('jquery'), $cssecoScriptsVer, true );


	if (is_page('disposable-gowns') || 
			is_page('reusable-gowns') || 
			is_page('shoe-cover') ||
			is_page('coveralls') ||
			is_page('surgical-masks')) {
		// Fixed to scroll
		wp_enqueue_script( 'gsap_scripts_fts', get_template_directory_uri().'/dist/js/gsap-fixtoscroll.js', array(), $cssecoScriptsVer, true );
	}
	
}
add_action( 'wp_enqueue_scripts', 'csseco_load_scripts' ); 