
import LoadingPage from "./_loading/loadingPage";
import HomePage from "./homePage/homePage";
import MainCard from "./maincard/mainCard";

export default function MyApp() {
  return (
    <div className="z-0 h-screen w-screen">
      {/* <LoadingPage /> */}
      <HomePage />
    </div>
  );
}
