/*
  This is the entry point to the application.
  All that we have to do is to require all needed
  polyfills, setup all configurable libraries (if any),
  and finally run our code

 */

import app from './main'

// this is not really needed, but I still use it, just letting everything else to render
// if it is not the last thing in the body
document.addEventListener('DOMContentLoaded', () => {
  app()
})
