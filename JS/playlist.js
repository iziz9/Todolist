import { selectors } from "./store.js";

export function randomPlaylist() {
  const num = Math.floor(Math.random() * playlist.length);
  selectors.youtubeEl.href = playlist[num];
}

const playlist = [
  "https://youtu.be/XnDN-hJA_xY",
  "https://youtu.be/08-t9C0SHEk",
  "https://youtu.be/3XM023yz_pI",
  "https://youtu.be/KzHOPckFmwc",
  "https://youtu.be/RRf7H2cwRdw",
  "https://youtu.be/LzKmBsqHGPU",
  "https://youtu.be/F8BujsI4H0s",
  "https://youtu.be/tMur_XSwGg4",
  "https://youtu.be/zfTzIoAqjis",
  "https://youtu.be/40QXPac2sQM",
  "https://youtu.be/u5UBeMWq2tU",
  "https://youtu.be/Kp2CdNsHy9U",
  "https://youtu.be/70KOHwsq3-I",
  "https://youtu.be/b3jInWRaEZE",
  "https://youtu.be/EuiPRLz8g2Y",
  "https://youtu.be/2Pw9e6C1U0c",
  "https://youtu.be/P5g15bHBxXM",
  "https://youtu.be/h_WhLaOoBuo",
  "https://youtu.be/PilwJ6WhNSM",
  "https://youtu.be/L-1RuqsO3mo"
];
