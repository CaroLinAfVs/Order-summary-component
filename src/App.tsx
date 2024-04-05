import Container from './componentes/Container';

function App() {
  return (
    <div className=" bg-very-pale-blue bg-pattern-desktop bg-cover bg-no-repeat h-full flex justify-center items-center">
      <div className="my-12 w-[450px] flex flex-col justify-center items-center bg-white rounded-2xl">
        <img
          className="w-full rounded-t-2xl"
          src="./illustration-hero.svg"
          alt=""
        />
        <Container
          title="Order Summary"
          subTitle="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
        />
      </div>
    </div>
  );
}

export default App;
