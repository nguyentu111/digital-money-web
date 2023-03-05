import TransHistory from "../components/TransHistory";
import Header from "../patials/Header";
import MyCards from "../components/MyCards";
import MainActions from "../components/MainActions";
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="gap-4 max-w-[1200px] m-auto p-4">
        <MainActions />
        <div className="flex gap-3">
          <TransHistory />
          <MyCards />
        </div>
      </div>
    </>
  );
}
