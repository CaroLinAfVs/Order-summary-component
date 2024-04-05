interface Props {
    title:string;
    price:number;
    text:string;
  }

  function Price(props:Props){
    return(<div className=" text-[#7280a7] w-full flex justify-between items-center p-6 bg-[#f5f7ff] rounded-lg">
    <img src="./icon-music.svg" alt="icon" />
    <div>
      <strong>{props.title}</strong>
      <p>${props.price}/Year</p>
    </div>
    <a
      href="#"
      className="underline hover:no-underline hover:text-[#675dd5] text-[#3829e0]"
    >
      {props.text}
    </a>
  </div>)
  }
  export default Price