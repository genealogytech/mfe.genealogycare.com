/**
 * When we use import in this kind of function form,
 * it's going to load up the bootstrap file
 * asynchronously
 *
 * So we've got this import bootstrap and it's that
 * important statement right there that gives Webpack
 * the ability to take a look at the bootstrap file
 * and understand what the bootstrap file needs to run.
 */
import('./bootstrap');
