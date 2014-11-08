<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta http-equiv="content-type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title( '-', true, 'right' ); ?></title>
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/all.css"/>
	<!--[if gte IE 9]>
	  <style type="text/css">
		.gradient {
		   filter: none;
		}
	  </style>
	<![endif]-->
</head>
<body>
	<div class="wrapper">
		<header class="header">
			<div class="top">
				<ul class="auth_block">
					<li><a target="_blank" href="<?php echo get_settings('siteurl'); ?>/wp-login.php"><i class="sprite"></i> Log in</a></li>
					<li><a target="_blank" href="<?php echo get_settings('siteurl') . '/wp-login.php?action=register'?>"><i class="sprite"></i> Sign up</a></li>
					<li class="alt"><?php wp_get_archives('format=custom'); ?></li>
				</ul>
				<?php wp_nav_menu( array('theme_location' => 'extra-menu', 'container' => false, 'menu_class' => 'links') ); ?>
			</div>
			<div class="middle">
				<strong class="logo sprite">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Companylogo</a>
				</strong>
				<div class="search_block">
					<form action="#">
						<input type="text">
						<button class="gradient btn" type="submit">Search</button>
					</form>
				</div>
			</div>
			<div class="nav gradient">
				<nav>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Gallery</a></li>
						<li><a href="#">Drop Down</a></li>
						<li><a href="#">Full Page</a></li>
						<li><a href="#">Options</a></li>
						<li><a href="#">Contacts</a></li>
					</ul>
				</nav>
				<ul class="search_links">
					<li><a href="#">Search 1</a></li>
					<li><a href="#">Search 2</a></li>
				</ul>
			</div>
		</header>
		<div class="main">