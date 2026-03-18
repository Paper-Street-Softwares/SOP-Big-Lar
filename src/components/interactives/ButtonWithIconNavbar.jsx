export default function ButtonWithIcon(props, className) {
  const { icon, label } = props;

  return (
    <button className="flex flex-row items-center justify-center transition rounded-[40px] px-[18px] py-[10px] bg-black text-white button-gradient-effect">
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col justify-end">{icon}</div>
        <p className="flex items-center text-paragraph3 font-secondFont font-bold">
          {label}
        </p>
      </div>
    </button>
  );
}
