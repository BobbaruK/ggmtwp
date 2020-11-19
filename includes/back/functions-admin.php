<?php
/**
  * @package fxoroV3
  * includes/back/functions-admin.php
  *
  */
function csseco_add_admin_page() {
	
	/**
	 * ================
	 *      Generate main theme option page
	 * ================
	 */
	add_menu_page( 
		__('CSSeco Theme Option', 'fxoroV3'),
		__('CSSeco Theme', 'fxoroV3'),
		'manage_options',
		'csseco_theme_options_page',
		'csseco_theme_create_page',
		get_template_directory_uri() . '/dist/imgs/csseco_admin_icon.png',
		110
	);
	
	/**
	 * ================
	 *      Generate main theme option secondary page/pages
	 * ================
	 */
	add_submenu_page( // page #1(same as csseco_theme_options_page)
		'csseco_theme_options_page',
		__('CSSeco Theme Option', 'fxoroV3'),
		__('General Settings', 'fxoroV3'),
		'manage_options',
		'csseco_theme_options_page',
		'csseco_theme_create_page'
	);
	
	add_submenu_page( // page #2
		'csseco_theme_options_page',
		__('Sidebar Settings', 'fxoroV3'),
		__('Theme Settings', 'fxoroV3'),
		'manage_options',
		'csseco_theme_options_page_2',
		'csseco_theme_support_page'
	);
	
	
	
	// Activate custom settings
	add_action( 'admin_init', 'fxoroV3_custom_settings' );
	
}
add_action( 'admin_menu', 'csseco_add_admin_page' );



/**
 * ================
 *      Custom Settings api
 * ================
 */
function fxoroV3_custom_settings() {
	
	/***
	  * General Settings Page - settings, sections and fields
	  */
	// Settings
	register_setting( 'fxoroV3-setting-group', 'logo' ); // picture upload
	register_setting( 'fxoroV3-setting-group', 'tw', 'csseco_sanitize_twitter_handler' );
	register_setting( 'fxoroV3-setting-group', 'fb');
	register_setting( 'fxoroV3-setting-group', 'gp' );
	
	// Sections
	add_settings_section( 'fxoroV3-main-options', __( 'General Settings', 'fxoroV3' ), 'fxoroV3_general_options', 'csseco_theme_create_page' );
	add_settings_section( 'fxoroV3-mainsm-options', __( 'Social Media Settings', 'fxoroV3' ), 'fxoroV3_social_options', 'csseco_theme_create_page' );
	
	// Fields
	add_settings_field( 'logo-setting', __( 'Logo', 'fxoroV3' ), 'fxoroV3_logo', 'csseco_theme_create_page', 'fxoroV3-main-options' );
	add_settings_field( 'tw-setting', 'Twitter', 'fxoroV3_smtw', 'csseco_theme_create_page', 'fxoroV3-mainsm-options' );
	add_settings_field( 'fb-setting', 'Facebook', 'fxoroV3_smfb', 'csseco_theme_create_page', 'fxoroV3-mainsm-options' );
	add_settings_field( 'gp-setting', 'Google +', 'fxoroV3_smgp', 'csseco_theme_create_page', 'fxoroV3-mainsm-options' );
	
	/***
	  * Theme Settings Page - settings, sections and fields
	  */
	// Settings
	register_setting( 'fxoroV3-theme-support', 'csseco_post_formats', 'fxoroV3_post_formats_callback' );
	
	// Sections
	add_settings_section( 'fxoroV3-theme-options', __( 'Theme Settings', 'fxoroV3' ), 'fxoroV3_theme_options', 'csseco_theme_support_page' );
	
	// Fields
	add_settings_field( 'post-formats', __( 'Post Formats', 'fxoroV3' ), 'fxoroV3_post_formats', 'csseco_theme_support_page', 'fxoroV3-theme-options' );
	
}



/**
 * ================
 *      Sanitization and Callback Functions
 * ================
 */
function fxoroV3_post_formats_callback( $input ) {
	return $input;
}

function csseco_sanitize_twitter_handler( $input ) {
	$output = sanitize_text_field( $input );
	$output = str_replace( '@', '', $output );
	return $output;
}

/**
 * ================
 *      Pages code generation
 * ================
 */
function csseco_theme_create_page() {
	require_once( get_template_directory() . '/includes/back/templates/csseco-general-opts.php' );
	
}

function csseco_theme_support_page() {
	require_once( get_template_directory() . '/includes/back/templates/csseco-theme-opts.php' );
}