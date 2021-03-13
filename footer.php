<?php
/**
  * @package cssecoST
  * footer.php
  */
?>
		<footer id="footer" class="site_footer">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<?php
							wp_nav_menu( array( 
								'theme_location'        =>      'footer',
								'container'             =>      'nav',
								'container_class'       =>      'footer_menu',
								'container_id'          =>      'cssecoFooterMenu' //
							) );
						?>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<p><span id="lp_year"></span> &copy; Globus Global Manufacturing & Trading Co, Limited</p>
						<p>Unit 1102, 11/F 29 Austin Road TST, KL, HK</p>
					</div>
				</div>
			</div>
		</footer>
	</div><!-- /#site-wrapper -->
	<?php wp_footer(); ?>
</body>
</html>