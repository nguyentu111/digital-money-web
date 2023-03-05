import BankingCard from "./BankingCard";

function MyCards() {
  return (
    <div className="p-4 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <span className="text-xl font-bold ">Thẻ của tôi</span>
        <button className="btn-primary">+ Thêm thẻ mới</button>
      </div>
      <div className="flex gap-3 flex-wrap">
        <BankingCard />
        <BankingCard />
        <BankingCard />
      </div>
    </div>
  );
}

export default MyCards;
