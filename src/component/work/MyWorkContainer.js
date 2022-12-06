import WorkContainer from "./WorkContainer.js";

const WORKS = [
  {
    first: true,
    name: "Wish List",
    link: "https://github.com/AJManzione/wish-list",
    src: "res/image/wishlist.png",
  },
  {
    first: false,
    name: "Info-Spout",
    link: "https://github.com/DeltaBreaker/Info-Spout",
    src: "https://github.com/DeltaBreaker/Info-Spout/blob/main/Info-Spout.gif?raw=true",
  },
  {
    first: false,
    name: "FFXIV Market Data Tool",
    link: "https://github.com/DeltaBreaker/Lolorito",
    src: "https://user-images.githubusercontent.com/6527156/188293104-4986077c-2f57-426d-b1c6-4a3e92ba79f6.png",
  },
  {
    first: false,
    name: "Website Code Refactor",
    link: "https://github.com/DeltaBreaker/Website-Code-Refactor",
    src: "res/image/refactor.png",
  },
  {
    first: false,
    name: "Color Finder",
    link: "https://github.com/DeltaBreaker/Screen-Color-Finder",
    src: "res/image/color_finder.png",
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
