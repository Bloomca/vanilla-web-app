/*
  This is _data layer_
  It is a very simplified version of possible implementation –
  API library (here it is jsonp), actual query for the server,
  and data processing. Basically, we normalize data to avoid
  all inconsistencies with changing API – if the API changes, we
  don't have to change all our code – only here, in our adapter
 */

import jsonp from 'jsonp'

// this approach might be useless for you – because of very stable
// API in your project, or due to performance issues
// But if you are unsure, then adapter pattern is really handy
function parseSong(song) {
  if (song) {
    return {
      title: song.trackName,
      artist: song.artistName,
      picture: song.artworkUrl100
    }
  }
}

// We filter by Boolean to ensure there is no wrong data
// this might help you (sooner or later)
//
// Also good practice is to add some type of warning in such cases,
// to understand what went wrong
function parseSongs(songs) {
  return songs.map(parseSong).filter(Boolean)
}

export function fetchSongs(term) {
  return new Promise(resolve => {
    jsonp(`https://itunes.apple.com/search?term=${term}&entity=song`, (err, res) => {
      resolve(parseSongs(res.results))
    })
  })
}
