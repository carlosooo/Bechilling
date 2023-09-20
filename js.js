const playBtn = document.querySelector('#playBtn');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const audio = document.getElementById('myAudio');
const playlist = [
  'musicas/musica1.mp3',
  'musicas/musica2.mp3',
  'musicas/musica3.mp3',
  'musicas/musica4.mp3',
  'musicas/musica4.mp3',
  'musicas/musica5.mp3',
  'musicas/musica6.mp3',
  'musicas/musica7.mp3',
  'musicas/musica8.mp3',
  'musicas/musica9.mp3',
  'musicas/musica10.mp3',
  'musicas/musica11.mp3',
  'musicas/musica12.mp3',
  'musicas/musica13.mp3',
  'musicas/musica14.mp3',
  'musicas/musica15.mp3',
  'musicas/musica16.mp3',
  'musicas/musica17.mp3',
  'musicas/musica18.mp3',
];
let currentTrack = 0;

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pausar";
  } else {
    audio.pause();
    playBtn.textContent = "Play";
  }
}

function prevTrack() {
  currentTrack--;
  if (currentTrack < 0) {
    currentTrack = playlist.length - 1;
  }
  audio.src = playlist[currentTrack];
  audio.play();
  playBtn.textContent = "Pausar";
}

function nextTrack() {
  currentTrack++;
  if (currentTrack >= playlist.length) {
    currentTrack = 0;
  }
  audio.src = playlist[currentTrack];
  audio.play();
  playBtn.textContent = "Pausar";
}

playBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

const musicas = ['musicas/musica1.mp3',
  'musicas/musica2.mp3',
  'musicas/musica3.mp3',
  'musicas/musica4.mp3',
  'musicas/musica4.mp3',
  'musicas/musica5.mp3',
  'musicas/musica6.mp3',
  'musicas/musica7.mp3',
  'musicas/musica8.mp3',
  'musicas/musica9.mp3',
  'musicas/musica10.mp3',
  'musicas/musica11.mp3',
  'musicas/musica12.mp3',
  'musicas/musica13.mp3',
  'musicas/musica14.mp3',
  'musicas/musica15.mp3',
  'musicas/musica16.mp3',
  'musicas/musica17.mp3',
  'musicas/musica18.mp3',];

// pré-carrega as músicas
musicas.forEach((musica) => {
  const audio = new Audio();
  audio.src = musica;
  audio.addEventListener('canplaythrough', () => {
    console.log(`Música ${musica} pré-carregada!`);
  });
});

// toca a primeira música quando a página for carregada
audio.src = musicas[0];
audio.play();

audio.addEventListener('ended', () => {
  currentTrack++;
  if (currentTrack < playlist.length) {
    audio.src = playlist[currentTrack];
    audio.play();
  } else {
    currentTrack = 0;
    audio.src = playlist[currentTrack];
    audio.play();
  }
});
