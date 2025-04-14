import dynamic from "next/dynamic";
import CardSection from "./components/CardSection/CardSection";
import { gamesData } from "./util/mockData";

const Home: React.FC = async () => {
  const DarkModeToggle = dynamic(
    () => import("./components/DarkModeToggle/DarkModeToggle")
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      <div className="w-full flex justify-between gap-2 mb-1">
        <div>
          <h1 className="text-5xl font-bold">
            Personal favourite gaming experiences
          </h1>
        </div>
        <div className="mt-2">
          <DarkModeToggle />
        </div>
      </div>

      <p>By Patrik Grändevall</p>

      <CardSection games={gamesData} />
    </div>
  );
};
export default Home;
