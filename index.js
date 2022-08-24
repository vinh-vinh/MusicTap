const $ = document.querySelector.bind(document);
const pads = document.querySelectorAll(".pads div");
const sounds = document.querySelectorAll(".sound");
const visual = document.querySelector(".visual");
console.log(visual);
const pad = $(".pads");

const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3",
];

const app = {
  currentIndex: 0,
  songs: [
    {
      path: "./sounds/bubbles.mp3",
    },
    {
      path: "./sounds/clay.mp3",
    },
    {
      path: "./sounds/confetti.mp3",
    },
    {
      path: "./sounds/glimmer.mp3",
    },
    {
      path: "./sounds/moon.mp3",
    },
    {
      path: "./sounds/ufo.mp3",
    },
  ],

  render: function () {
    const htmls = this.songs.map((item, index) => {
      return `
      <div class='${"pad" + (index + 1)}' data-index=${index}  >
        <audio class="sound" >
          <source src="${item.path}">
        </audio>
      </div>
      `;
    });

    pad.innerHTML = htmls.join("");
  },

  handlePlay: function () {
    pad.onclick = function (e) {
      const sounds = document.querySelectorAll(".sound");
      console.log(sounds);
      test = e.target.closest(".pads div ");
      if (test) {
        sounds.currentIndex = Number(test.getAttribute("data-index"));
        sounds[sounds.currentIndex].currentTime = 0;
        sounds[sounds.currentIndex].play();

        createBubble(sounds.currentIndex);
      }
    };

    // Bubble
    const createBubble = (index) => {
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = `jump 1s ease`;
      bubble.addEventListener("animationend", function () {
        visual.removeChild(this);
      });
    };
  },

  start: function () {
    this.handlePlay();
    this.render();
  },
};

app.start();
