function App() {
  return (
    <div className="  h-full flex justify-center items-center">
      <div className="my-12 w-[450px] flex flex-col items-center justify-center items-center bg-white rounded-2xl">
        <img
          className="w-full rounded-t-2xl"
          src="./illustration-hero.svg"
          alt=""
        />
        <div className=" p-8 flex flex-col justify-center items-center">
          <h2 className="py-3.5 text-3xl font-bold text-[#1f2f56]">
            Order Summary
          </h2>
          <p className="py-3.5 text-lg text-center text-[#7280a7]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className=" text-[#7280a7] w-full flex justify-between items-center p-6 bg-[#f5f7ff] rounded-lg">
            <img src="./icon-music.svg" alt="icon" />
            <div>
              <strong>Annual plan</strong>
              <p>$59.99/year</p>
            </div>
            <a
              href="#"
              className="underline hover:no-underline hover:text-[#675dd5] text-[#3829e0]"
            >
              Change
            </a>
          </div>
          <button className="bg-[#3829e0] font-bold hover:bg-[#584dd7] text-white text-base py-4 m-3.5 rounded-2xl w-full">
            Proceed to payment
          </button>
          <button className="font-bold py-4 text-base text-[#7280a7] hover:text-black">
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
