const messages = [
  "another year has flown by",
  "doesn't time really fly?",
  "just a few years ago",
  "you and i were goofing off",
  "trying to become Percy Jackson characters",
  "and through all these years",
  "watching people in TV shows",
  "people we find relatable",
  "it seems we are growing up",
  "but on this special day",
  "i hope you realise",
  "u are the person you always have wanted to be",
  "in my eyes",
  "if there was a fruit i'd assign you",
  "it would be an apple",
  "that would sit at the very top of its tree",
  "glistening and smiling to the ones below",
  "in that respect",
  "i hope you'll always",
  "keep reaching for the skies",
  "because you are made to fly",
  "and in your journey",
  "i will forever be by your side",
  "and if the apple ever falls",
  "i will be the one to catch it",
  "now then",
  "a mighty jolly happy birthday from your one and only",
  "hanz",
  "i would play as the jester",
  "in your court rn, my queen",
  "if you were any close",
  "for your laugh is more precious",
  "than anything in the world",
  "i hope this brings a smile to your face"
];

const messageEl = document.getElementById("message");
const progressBar = document.getElementById("progressBar");
const card = document.getElementById("birthdayCard");
const intro = document.getElementById("intro");
const beginButton = document.getElementById("beginButton");
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const replayButton = document.getElementById("replayButton");
const signature = document.getElementById("signature");

let current = -1;
let timer = null;
let started = false;
let musicPlaying = false;

// Change these two values if you want a slower/faster reading rhythm.
const DISPLAY_TIME = 4300;
const FADE_TIME = 1100;

function showMessage(index) {
  current = index;

  if (index >= messages.length) {
    finish();
    return;
  }

  messageEl.classList.remove("show");
  messageEl.classList.add("hide");

  window.setTimeout(() => {
    messageEl.textContent = messages[index];
    messageEl.classList.remove("hide");
    messageEl.classList.add("show");

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressBar.style.transition = `width ${DISPLAY_TIME}ms linear`;
        progressBar.style.width = "100%";
      });
    });

    timer = window.setTimeout(() => {
      messageEl.classList.remove("show");
      messageEl.classList.add("hide");
      timer = window.setTimeout(() => showMessage(index + 1), FADE_TIME);
    }, DISPLAY_TIME);
  }, FADE_TIME);
}

function start() {
  if (started) return;
  started = true;

  intro.classList.add("hidden");
  card.classList.add("active");

  // Browsers allow audio after a user interaction.
  music.play()
    .then(() => {
      musicPlaying = true;
      musicButton.innerHTML = "♫ <span>music on</span>";
    })
    .catch(() => {
      musicPlaying = false;
      musicButton.innerHTML = "♫ <span>music</span>";
    });

  showMessage(0);
}

function finish() {
  clearTimeout(timer);
  progressBar.style.width = "0%";
  messageEl.classList.remove("show");
  messageEl.classList.add("hide");

  window.setTimeout(() => {
    messageEl.textContent = "happy birthday, my queen ✦";
    messageEl.classList.remove("hide");
    messageEl.classList.add("show");
    signature.classList.add("show");
  }, 900);
}

function replay() {
  clearTimeout(timer);
  signature.classList.remove("show");
  progressBar.style.width = "0%";
  showMessage(0);
}

beginButton.addEventListener("click", start);

musicButton.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => {
      musicPlaying = true;
      musicButton.innerHTML = "♫ <span>music on</span>";
    }).catch(() => {});
  } else {
    music.pause();
    musicPlaying = false;
    musicButton.innerHTML = "♫ <span>music off</span>";
  }
});

replayButton.addEventListener("click", () => {
  if (!started) start();
  else replay();
});
