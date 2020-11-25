<?php
/**
  * @package cssecoST
  * header.php
	*/
	
	// Site url
	$site_url = get_home_url();

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<title><?php bloginfo('name'); wp_title(); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if( is_singular() && pings_open( get_queried_object() ) ) { ?>
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<?php } ?>
	<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div id="site-wrapper" class="fp">
		<div class="bgfp">
			<div class="container">
				<header id="header" class="site_header frontpage_header">
					<div class="container">
						<div class="row">
							<div class="col-6 col-md-3">
								<div class="logoWrapper">
									<a href="<?php echo $site_url; ?>">
										<img src="<?php echo get_template_directory_uri() ?>/dist/imgs/logos/GGMT_logo2.png" alt="Logo" class="header_logo">
									</a>
								</div>
							</div>
							<div class="col-6 d-flex flex-row-reverse align-items-center d-md-none">
								<div class="burgerWrapper">
									<div class="burger">
										<div class="burger__bar"></div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-9">
								<?php
									wp_nav_menu( array( 
										'theme_location'        =>      'primary',
										'container'             =>      'nav',
										'container_class'       =>      'header_menu leMenu menufp',
										'container_id'          =>      'cssecoMenu' //
									) );
								?>
							</div>
						</div>
					</div>
				</header><!-- /#header -->
			
				
				
	