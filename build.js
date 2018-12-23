
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
	name: chalk.white.bold( "             Jim Liu" ),
	handle: chalk.cyan( "@jimcalliu" ),
	pronouns: chalk.magenta( "             Pronouns" ),
	pronounsHe: chalk.magenta( "he" ),
	pronounsHis: chalk.magenta( "him" ),
	pronounsHim: chalk.magenta( "his" ),
	work: chalk.white( "Software Engineer @ Nordstrom" ),
	workUrl: chalk.cyan( "--==--==--==--==--==--==--" ),
	twitter: chalk.cyan( "https://twitter.com/jimcalliu" ),
	github: chalk.cyan( "https://github.com/jimcal" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/jimycliu" ),
	volunteer: chalk.cyan( "https://2018.cascadiajs.com" ),
	web: chalk.cyan( "https://itsj.im" ),
	// bio: chalk.yellow( "Building & Thinking about primitives💭 Travel🛫 Coffee☕Football🏈Automobile🏎." ),
	npx: chalk.white( "npx jimcal" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelWorkUrl: chalk.white.bold( "           " ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelVolunteer: chalk.white.bold( " Volunteer:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	labelBio: chalk.white.bold( "       Bio: " )
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${ data.name } / ${ data.handle }`;
const pronouns = `${ data.pronouns }:${ data.pronounsHe }/${ data.pronounsHis }/${ data.pronounsHim }`;
const working = `${ data.labelWork }  ${ data.work }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const npming = `${ data.labelnpm }  ${ data.npm }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const volunteering = `${ data.labelVolunteer }  ${ data.volunteer }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
// const bio = `${ data.labelBio } ${ data.bio }`;
const carding = `${ data.labelCard }  ${ data.npx }`;

// Put all our output together into a single variable so we can use boxen effectively
const output = banner + newline +
               heading + newline + // data.name + data.handle
               pronouns +
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               volunteering + newline + // data.labelVolunteer + data.volunteer
               webing + newline + // data.labelWeb + data.web
//  bio + newline + newline +
               carding; // data.labelCard + data.npx

fs.writeFileSync( path.join( __dirname, "bin/output" ), chalk.green( boxen( output, options ) ) )
;
