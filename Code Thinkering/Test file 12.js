const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  
  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  // Prints a list of all playlists
  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  // Prints a list of all tracks
  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // Prints a list of tracks for a given playlist
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  
  // Adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  
  // Generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  
  // Adds a track to the library
  addTrack: function(name, artist, album) {
    const newTrackId = this.generateUid();
    this.tracks[newTrackId] = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album
    };
  },
  
  // Adds a playlist to the library
  addPlaylist: function(name) {
    const newPlaylistId = this.generateUid();
    this.playlists[newPlaylistId] = {
      id: newPlaylistId,
      name: name,
      tracks: []
    };
  },
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  // Prints a list of tracks where the name, artist, or album contains the query string (case insensitive)
  printSearchResults: function(query) {
    query = query.toLowerCase();
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (
        track.name.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query) ||
        track.album.toLowerCase().includes(query)
      ) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};

console.log("Printing all playlists:");
library.printPlaylists();

console.log("Printing all tracks:");
library.printTracks();

console.log("Printing playlist p01:");
library.printPlaylist("p01");

console.log("Adding track t03 to playlist p01:");
library.addTrackToPlaylist("t03", "p01");
console.log(library.playlists["p01"]);

console.log("Generated UID:", library.generateUid());

console.log("Adding a new track:");
library.addTrack("New Track", "New Artist", "New Album");
console.log(library.tracks);

console.log("Adding a new playlist:");
library.addPlaylist("New Playlist");
console.log(library.playlists);

console.log("Printing search results for query 'Code':");
library.printSearchResults("Code");
