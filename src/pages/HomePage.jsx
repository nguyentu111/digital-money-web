import TransHistory from "../components/TransHistory";
import Header from "../patials/Header";
import MyCards from "../components/MyCards";
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <TransHistory />
        <MyCards />
      </div>
    </>
  );
}
