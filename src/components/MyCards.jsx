import { useState } from "react";
import AddNewBankingCardForm from "./AddNewBankingCardForm";
import BankingCard from "./BankingCard";

function MyCards() {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className="p-4 rounded-lg shadow-lg flex-1">
      <div className="flex justify-between my-2">
        <span className="text-xl font-bold ">Thẻ của tôi</span>
        <button className="btn-primary" onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Hủy" : " + Thêm thẻ mới"}
        </button>
      </div>
      <div className="flex flex-wrap">
        {isAdding ? (
          <AddNewBankingCardForm />
        ) : (
          <div className="flex gap-3 flex-wrap">
            <BankingCard />
            <BankingCard />
            <BankingCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCards;
