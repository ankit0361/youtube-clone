import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Live",
    "Music",
    "Cooking",
    "News",
    "Mixes",
    "Mutual Funds",
  ];
  return buttonList.map((button) => <Button key={button} name={button} />);
};

export default ButtonList;
