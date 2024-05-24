import Coffeewave from "./_components/coffeewave";
import LoadingPage from "./_loading/loadingPage";
import HomePage from "./homePage/homePage";
import MainCard from "./maincard/mainCard";

export default function MyApp() {
  return (
    <div className="z-0 w-screen h-screen">
      <LoadingPage />
      <Coffeewave />
      {/* <HomePage />
      <MainCard /> */}
    </div>
  );
}
