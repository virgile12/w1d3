var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },





printPlaylists: function () {
var number1 = this["playlists"];
for (var potato in number1) {

console.log(number1[potato].id +": " + number1[potato].name + " - " + (number1[potato].tracks.length) + " tracks")

}
},

printTracks: function () {
  var number2 = this["tracks"];
  for (var tracks2 in number2) {
    console.log(number2[tracks2].id +": " + number2[tracks2].name + " by " + number2[tracks2].artist + " " + "(" + number2[tracks2].album + ")")
  }

},

printPlaylist: function (playlistId) {
console.log(this['playlists'][playlistId]['id'] + ': ' + this['playlists'][playlistId]['name'] + ' - ' + this['playlists'][playlistId]['tracks'].length + ' tracks');
var identifiant_track = this.playlists[playlistId].tracks;
 for (var trackId of identifiant_track) {
   let song = this.tracks[trackId];
   console.log(song['id'] + ': ' + song.name + ' by ' + song['artist'] + ' (' + song['album']  + ')');
}
},

addTrackToPlaylist: function (trackId, playlistId) {
var a = trackId
var b = playlistId
this['playlists'][b]['tracks'].push[a]

},

addTrack: function(name, artist, album) {
var name = name;
var artist = artist;
var album = album;
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var id = uid();
this.tracks[id]= {id, name, artist, album};
},

addPlaylist: function(name) {
var name = name;
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var random = uid()
var id = 'p' + random;
this.playlists[id] = { id: id ,name: name, tracks: []}
}

}















library.printPlaylists()
library.printTracks()
library.printPlaylist('p01')
library.addTrackToPlaylist('t01', 'p02')
library.addTrack('george','john','blink182')
library.addPlaylist("john")
