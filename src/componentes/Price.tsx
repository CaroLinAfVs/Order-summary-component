interface Props {
  title: string;
  price: number;
  text: string;
}

function Price(props: Props) {
  return (
    <div className=" text-desaturated-blue w-full flex justify-between items-center my-3.5 p-6 bg-light-blue rounded-lg">
      <img src="./icon-music.svg" alt="icon" />
      <div>
        <strong className=" text-black">{props.title}</strong>
        <p>${props.price}/Year</p>
      </div>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className="underline hover:no-underline hover:text-white-purple text-dark-purple"
      >
        {props.text}
      </a>
    </div>
  );
}
export default Price;
