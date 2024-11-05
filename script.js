const audioPlayer = document.getElementById("audioPlayer");
const playlist = [
    { title: "Kita Usahakan Rumah Itu", url: "kitaUsahakanRumahItu.mp3" },
    { title: "Someone Like You", url: "SomeoneLikeYou.mp3" },
    { title: "Iris", url: "Iris.mp3" },
    { title: "Blue Jeans", url: "Blue Jeans.mp3" },
    { title: "if u could see me cryin' in my room ", url: "if u could see me cryin' in my room.mp3" },
    { title: "Kau Rumahku", url: "Kau Rumahku.mp3" },
    { title: "Old Love", url: "Old Love.mp3" },
    { title: "Best Part", url: "Best Part.mp3" },
    { title: "About You", url: "About You.mp3" },
    { title: "Sempurna", url: "Sempurna.mp3" },
    { title: "seasons", url: "seasons.mp3" },
    { title: "Nobody Gets Me", url: "Nobody Gets Me.mp3" },
    { title: "Mesra-mesraannya kecil-kecilan dulu ", url: "Mesra-mesraannya kecil-kecilan dulu.mp3" },
    { title: "Remaja", url: "Remaja.mp3" },
    { title: "drunk text", url: "drunk text.mp3" },
    { title: "Always", url: "Always.mp3" },


]; // Tambahkan lagu-lagu di sini
let currentSongIndex = -1; // Indeks lagu saat ini

// Event listener untuk memutar lagu berikutnya ketika selesai
audioPlayer.addEventListener("ended", () => playNextSong());

// Menampilkan playlist saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayPlaylist();
});

// Fungsi untuk menampilkan playlist di halaman
function displayPlaylist() {
    const playlistEl = document.getElementById("playlist");
    playlistEl.innerHTML = ''; // Kosongkan daftar sebelum menambah lagu baru

    playlist.forEach((song, index) => {
        const songEl = document.createElement("li");
        songEl.innerHTML = `
            <span>${song.title}</span>
            <button onclick="playSelectedSong(${index})">Play</button>
        `;
        playlistEl.appendChild(songEl);
    });
}

// Fungsi untuk memutar lagu yang dipilih dari playlist
function playSelectedSong(index) {
    currentSongIndex = index;
    audioPlayer.src = playlist[index].url;
    audioPlayer.style.display = "block";
    audioPlayer.play();
}

// Fungsi untuk memutar lagu
function playMusic() {
    if (audioPlayer.src) {
        audioPlayer.play();
    } else {
        alert("No song selected. Please add a song to the playlist.");
    }
}

// Fungsi untuk menjeda pemutaran
function pauseMusic() {
    if (audioPlayer.src) {
        audioPlayer.pause();
    }
}

// Fungsi untuk menghentikan pemutaran
function stopMusic() {
    if (audioPlayer.src) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    const audioPlayer = document.getElementById("audioPlayer");
let currentSongIndex = -1; // Indeks lagu saat ini dimulai dari -1

// Menambahkan event listener untuk mendeteksi akhir lagu
audioPlayer.addEventListener("ended", playNextSong);

// Fungsi untuk beralih ke lagu berikutnya di playlist
function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0; // Kembali ke lagu pertama jika sudah di akhir
    }
    playCurrentSong();
}



}
