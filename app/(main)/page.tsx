import Coffeewave from "./_components/coffeewave";
import LoadingPage from "./_loading/loadingPage";
import HomePage from "./homePage/homePage";
import MainCard from "./maincard/mainCard";

export default function MyApp() {
  return (
    <div>
      <LoadingPage />
      <div className="absolute w-screen h-screen z-10 flex flex-col items-center overflow-scroll">
        <Coffeewave />
        <HomePage />
        <MainCard />
      </div>
    </div>
  );
}
