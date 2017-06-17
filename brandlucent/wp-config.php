<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'brandlucent');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '))dKn,[BBNyIcnonAak{JD^.iWvRRk&kM=u/LvWZM6pHw,^sym>!>CJ.QAHe{MAg');
define('SECURE_AUTH_KEY',  'V0GX;negb0_&?-`<]nNMmG]a5 E{Hv,>9G(J&{]9m(;CM}p*mpkpJm(o7!4}AF(,');
define('LOGGED_IN_KEY',    '3K/8o0f5v4a+9j7rpSnNoJHns/&H/X/L@M66`R`kT2jj3`|MR9y[UQTD/uJSCWFm');
define('NONCE_KEY',        'G${2yTmZR Su|}Q&>sE=+G5 FhmBW }FO$UCz;/tLq9~<PQK}*5u{lU 42)P[o1z');
define('AUTH_SALT',        '[R.Ll9x<R<;JCZK94KqA`N-+j^}40lH_[FI[/En-Mmyku0Hk`ss@6DY): <f&95a');
define('SECURE_AUTH_SALT', 'dRQ5bKyeb99JNcd#m_}<{jY`M?H7~W3T0Wg)#(^$^drk^ExR1u3QI##d#3io^rcq');
define('LOGGED_IN_SALT',   'Wx!-?r1m$fhj~j%&[LH<)%X*3:=`+5q[Npt`S,j|{}F]0#XMw3yYFL0i(7#)@RZ%');
define('NONCE_SALT',       '=bl -Iy(P/wg~SJ|o^P,.UD9(W5KL``~{GQu8,.],d:ghnb?w?-3eoNIU b|j~Hd');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
