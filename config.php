<?php

/**
 * HybridAuth
 * http://hybridauth.sourceforge.net | http://github.com/hybridauth/hybridauth
 * (c) 2009-2015, HybridAuth authors | http://hybridauth.sourceforge.net/licenses.html
 */
// ----------------------------------------------------------------------------------------
//	HybridAuth Config file: http://hybridauth.sourceforge.net/userguide/Configuration.html
// ----------------------------------------------------------------------------------------

return
		array(
			"base_url" => "http://www.drubbr.com/hauth/",
			"providers" => array(
				// openid providers
				/*
				"OpenID" => array(
					"enabled" => true
				),
				"Yahoo" => array(
					"enabled" => true,
					"keys" => array("key" => "", "secret" => ""),
				),
				"AOL" => array(
					"enabled" => true
				),
				"Google" => array(
					"enabled" => true,
					"keys" => array("id" => "896296504931-q377n87q73pl296if08phtvelg37hr8o.apps.googleusercontent.com", "secret" => "OLTTR-AeBzFnsDhoZP8KhrfX"),
				),
				*/
				"Facebook" => array(
					"enabled" => true,
					"keys" => array("id" => "703517433128106", "secret" => "61e3a84eafde500ecbde39d556da294c"),
					"scope"   => "email,user_friends,public_profile,user_birthday,user_location"

				)
/*
				,
				"Twitter" => array(
					"enabled" => true,
					"keys" => array("key" => "27qZJJ3Pzafr40BWQPEJPUvqa", "secret" => "yPfWaNe8qqh1TsmjMxX4d2F7H0oX9e3Ta79s1R70wdxHPPvFc3")
				),
				// windows live
				"Live" => array(
					"enabled" => true,
					"keys" => array("id" => "", "secret" => "")
				),
				"LinkedIn" => array(
					"enabled" => true,
					"keys" => array("key" => "", "secret" => "")
				),
				"Foursquare" => array(
					"enabled" => true,
					"keys" => array("id" => "", "secret" => "")
				),
				*/
			),
			// If you want to enable logging, set 'debug_mode' to true.
			// You can also set it to
			// - "error" To log only error messages. Useful in production
			// - "info" To log info and error messages (ignore debug messages)
			"debug_mode" => false,
			// Path to file writable by the web server. Required if 'debug_mode' is not false
			"debug_file" => "",
);
