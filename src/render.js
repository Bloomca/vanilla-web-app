/*
  This is the easiest function to render something

  In reality we can add lifecycle hooks, caching,
  automatic delegation of events.

  To make this happen, we have to operate components
  (or classes) – because basically we need data
  with some methods
 */

export function render({ markup, el }) {
  // this is syncronous rendering, so hooks would be:
  // beforeMount(component)
  el.innerHTML = markup
  // afterMount(component)

  // but some frameworks can do it asyncronously,
  // and invoke this stuff in different time
}
