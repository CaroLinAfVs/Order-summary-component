import Conteiner from './componentes/Conteiner';

function App() {
  return (
    <div className="  h-full flex justify-center items-center">
      <div className="my-12 w-[450px] flex flex-col items-center justify-center bg-white rounded-2xl">
        <img
          className="w-full rounded-t-2xl"
          src="./illustration-hero.svg"
          alt=""
        />
        <Conteiner
          h2="Order Summary"
          p="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
        />
      </div>
    </div>
  );
}

export default App;
