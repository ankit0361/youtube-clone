import {
  CHANNEL_ICON,
  HISTORY_ICON,
  HOME_ICON,
  LIKED_ICON,
  PLAYLISTS_ICON,
  SHORTS_ICON,
  SUBSCRIPTION_ICON,
  VIDEOS_ICON,
  YOU_ICON,
} from "../utils/imagesPath";

export const MAIN_MENU = [
  {
    img: HOME_ICON,
    text: "Home",
  },
  {
    img: SHORTS_ICON,
    text: "Shorts",
  },
  {
    img: SUBSCRIPTION_ICON,
    text: "Subscription",
  },
  {
    img: YOU_ICON,
    text: "You",
  },
];

export const YOU_MENU = [
  {
    img: CHANNEL_ICON,
    text: "Your channel",
  },
  {
    img: HISTORY_ICON,
    text: "History",
  },
  {
    img: PLAYLISTS_ICON,
    text: "Playlists",
  },
  {
    img: VIDEOS_ICON,
    text: "Your videos",
  },
  {
    img: HISTORY_ICON,
    text: "Watch later",
  },
  {
    img: LIKED_ICON,
    text: "Liked videos",
  },
];

export const SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
