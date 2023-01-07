import WorkContainer from "./WorkContainer.js";

const WORKS = [
  {
    name: "Attack Tactic",
    link: "https://github.com/DeltaBreaker/Attack-Tactic",
    depl: "https://store.steampowered.com/app/1472180/Attack_Tactic/",
    src: "res/image/at.jpg",
    desc: `Attack Tactic is a turn-based RPG with grid-based combat developed using LWJGL 3.
    It uses a fully custom engine that allows for real time lighting and shadows
    along with high efficiency optimization techniques such as batch sorting and deferred shading.
    It is currently listed on Steam and hoped to be relased within the coming year or two.`,
    info: `Built with Java 8, LWJGL 3, OpenGL 4.0`,
  },
  {
    name: "FFXIV Market Data Tool",
    link: "https://github.com/DeltaBreaker/Lolorito",
    src: "https://user-images.githubusercontent.com/6527156/188293104-4986077c-2f57-426d-b1c6-4a3e92ba79f6.png",
    desc: `This is a program to assist players in Final Fantasy XIV with finding the best items to sell on the in-game open market.
    Items can be sorted by potential profit, total gil made, total sold, and more.
    There and many filtering options that allow a high level of personalization in the results.`,
    info: "Built with Java 8",
  },
  {
    name: "Color Finder",
    link: "https://github.com/DeltaBreaker/Screen-Color-Finder",
    src: "res/image/color_finder.png",
    desc: `Color Finder is a small program to assist colorblind people with discerning colors that appear on screens.
    Once prompted, the program will show a popup window containing information about the selected color along with a link to view more detailed information on ColorHexa.`,
    info: "Built with Java 8",
  },
];

export default function MyWorkHeader() {
  let workContainers = [];
  for (const work of WORKS) {
    workContainers.push(<WorkContainer {...work} key="mywork" />);
  }

  return [
    <my-work-container id="my-work">
      <h2 class="header">My Work</h2>
    </my-work-container>,
    <work-containers>{workContainers}</work-containers>,
  ];
}
