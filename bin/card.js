#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

// Some sweet ascii art - for realz
const banner = require( "../art/banner" );

const newline = "\n";

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: "round"
};

// Text + chalk definitions
const data = {
    name: chalk.white.bold( "                   Jim Liu" ),
    handle: chalk.cyan( "jimcal" ),
    work: chalk.white( "Software Engineer" ),
    workUrl: chalk.cyan( "--==--==--==--==--==--==--" ),
    twitter: chalk.cyan( "https://twitter.com/jimcalliu" ),
    github: chalk.cyan( "https://github.com/jimcal" ),
    linkedin: chalk.cyan( "https://linkedin.com/in/jimycliu" ),
    volunteering: chalk.cyan( "https://2018.cascadiajs.com" ),    
    web: chalk.cyan( "https://itsj.im" ),
    npx: chalk.white( "npx jimcal" ),
    labelWork: chalk.white.bold( "      Work:" ),
    labelWorkUrl: chalk.white.bold( "           " ),
    labelTwitter: chalk.white.bold( "   Twitter:" ),
    labelGitHub: chalk.white.bold( "    GitHub:" ),
    labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
    labelWeb: chalk.white.bold( "       Web:" ),
    labelCard: chalk.white.bold( "      Card:" ),
    bio: chalk.yellow( `Building & Thinking about primitives💭 Travel🛫 Coffee☕Football🏈Automobile🏎 he/him/his. http://itsj.im.` )
};

// Actual strings we're going to output
const hr = chalk.yellow( "----------~~~~~~~~~==========~~~~~~~~~-----------" );
const heading = `${ data.name }`;
const working = `\n${ data.labelWork }  ${ data.work }`;
const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;

const card = [
    banner,
    hr, heading, hr, working, workingUrl,
    twittering, githubing, linkedining,
    webing, carding, bio
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
