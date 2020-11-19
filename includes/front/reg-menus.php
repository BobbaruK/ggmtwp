<?php
/**
  * @package fxoroV3
  * includes/front/reg-menus.php
  */

function csseco_reg_menus() {
	register_nav_menu( 'primary', __('Primary Menu', 'fxoroV3') );
	register_nav_menu( 'footer', __('Footer Menu', 'fxoroV3') );
}
add_action( 'after_setup_theme', 'csseco_reg_menus' );                 // register menus function