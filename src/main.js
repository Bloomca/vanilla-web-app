/*
  Here we actually kickstart our application
  We require all needed info for starting
  and then finally render page
 */

import loader from './views/loader'
import layout from './views/layout'
import createSongs from './views/songs'
import { fetchSongs } from './data'
import { render } from './render'

// Basically, all applications live in "loop"
// which is called differently in all frameworks
//
// We update our application by timer or on some
// events. Both approaches have good and bad parts
//
// Here, for instance, we create application and start
// to listen to search input. In something more real
// we'd some events declaration to listen to, but here
// for the sake of simplicity it is just one listener
//
// Also, in a real application, we'd also add unmouting,
// with removing all listeners. It could be done by
// invoking some function, which will return object with
// markup, events and dispose().
//
// As you can see, here we mostly do only rendering, and
// reacting to events (and exact function could be encap-
// sulated as well) – so code is quite declarative
export default () => {
  // we render our initial application
  const layoutContainer = document.getElementById('app')
  render({ markup: layout, el: layoutContainer })

  const appContainer = document.getElementById('content') || layoutContainer

  // and then we start to listen to changes
  const searchInput = document.getElementById('search')
  searchInput.addEventListener('keydown', (e) => {
    const newValue = e.target.value

    // render loader after new request
    render({ markup: loader, el: appContainer })

    // here we can get race conditions, but it is not very
    // importn
    fetchSongs(newValue).then(songs => {
      // render results
      render({ markup: createSongs(songs), el: appContainer })
    })
  })
}
