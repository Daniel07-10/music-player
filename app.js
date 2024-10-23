const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const playerArtist = document.getElementById('player__artist');
const playerSong = document.getElementById('player__song');
const albumImage = document.getElementById('player-img');

let currentSongIndex = 0; 

const playList = [
  {
    title: 'No me quiero casar',
    artist: "Bad Bunny",
    img: './images/nomequierocasar.jpg',
    song: './music/NO_ME_QUIERO_CASAR.mp3'
  },
  {
    title: 'Salud y vida',
    artist: "Daddy Yankee",
    img: './images/Salud_Y_Vida.jpg',
    song: './music/SaludYvida.mp3'
  },
  {
    title: 'Manicomio',
    artist: "Cosculluela",
    img: './images/manicomio.jpg',
    song: './music/Manicomio_cosculluela.mp3'
  },
  {
    title: 'Barrio Antioquia',
    artist: "Blessed",
    img: './images/barrioAntioquia.jpg',
    song: './music/BarrioAntioquia_blessed.mp3'
  },
  {
    title: 'Me compré un full ',
    artist: "Jamby",
    img: './images/MeCompreUnFull.jpg',
    song: './music/Mecompreunfull_jamby.mp3'
  }
];


function loadSong(songIndex) {
  const song = playList[songIndex];
  audio.src = song.song;
  playerArtist.textContent = song.artist;
  playerSong.textContent = song.title;
  albumImage.src = song.img;
}


function playSong() {
  audio.play();
}





function pauseSong() {
  audio.pause();
  
}


function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}


function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}


function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}


loadSong(currentSongIndex);


play.addEventListener('click', playSong);
pause.addEventListener('click', pauseSong);
stop.addEventListener('click', stopSong);
forward.addEventListener('click', nextSong);
rewind.addEventListener('click', previousSong);