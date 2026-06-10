function nextPage(pageNumber){
    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });

    document.getElementById(`page${pageNumber}`).classList.add('active');
}

// Music
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {
    bgMusic.play();
    musicBtn.innerText = '🎶 Musik Diputar';
});

// YES
document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('result').innerHTML =
        ' Makasih udah ngasih aku kesempatan lagi...';
});

// NO RUN AWAY
const noBtn = document.getElementById('noBtn');

const texts = [
    "🥺 Yakin?",
    " Serius?",
    "🤨 Dipikir lagi",
    "😔 Masa sih?",
    "💔 Jangan dong"
];

let index = 0;

noBtn.addEventListener('mouseover', () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.innerText = texts[index];
    index = (index + 1) % texts.length;
});
