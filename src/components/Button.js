const Button = ({ name }) => {
  return (
    <button className="tw-mr-3 tw-py-1 tw-px-3 tw-rounded-lg tw-text-black tw-text-md tw-font-medium tw-bg-slate-100 hover:tw-bg-slate-200">
      {name}
    </button>
  );
};

export default Button;
