
"use strict";

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );
const fs = require( "fs" );
const path = require( "path" );
const banner = require( "./art/banner" );

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.white.bold( "              Jim Liu" ),
	handle: chalk.cyan( "jimcal" ),
	work: chalk.white( "Software Engineer @ Nordstrom" ),
	workUrl: chalk.cyan( "--==--==--==--==--==--==--" ),
	twitter: chalk.cyan( "https://twitter.com/jimcalliu" ),
	github: chalk.cyan( "https://github.com/jimcal" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/jimycliu" ),
	volunteer: chalk.cyan( "https://2018.cascadiajs.com" ),
	web: chalk.cyan( "https://itsj.im" ),
	npx: chalk.white( "npx jimcal" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelWorkUrl: chalk.white.bold( "           " ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelVolunteer: chalk.white.bold( " Volunteer:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	bio: chalk.yellow( "Building & Thinking about primitives💭 Travel🛫 Coffee☕Football🏈Automobile🏎 he/him/his. http://itsj.im." )
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${ data.name } / ${ data.handle }`;
const working = `${ data.labelWork }  ${ data.work }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const npming = `${ data.labelnpm }  ${ data.npm }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const volunteering = `${ data.labelVolunteer }  ${ data.volunteer }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `${ data.labelCard }  ${ data.npx }`;

// Put all our output together into a single variable so we can use boxen effectively
const output = banner + newline +
               heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               volunteering + newline + // data.labelVolunteer + data.volunteer
               webing + newline + newline + // data.labelWeb + data.web
               carding; // data.labelCard + data.npx

fs.writeFileSync( path.join( __dirname, "bin/output" ), chalk.green( boxen( output, options ) ) )
;
