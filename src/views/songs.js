// This can be named as 'factory' for songs component
// because it is a function which creates component
// with predefined set of songs

export default (songs) => {
  return `
    <ul>
      ${songs.map(({ artist, title, picture }) => {
        return `
          <li>
            ${artist}
            ${title}
            <img src="${picture}" alt="${title}" />
          </li>
        `
      })}
    </ul>
  `
}
