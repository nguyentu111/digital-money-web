import { useState } from "react";
import Header from "../patials/Header";

function TransferMoney() {
  const [transType, setTransType] = useState(1);
  return (
    <div className="m-auto flex flex-col h-screen">
      <Header />
      <div className=" flex-1 flex flex-col justify-center">
        <div className="max-w-full w-[600px] shadow-lg m-auto rounded-lg overflow-hidden">
          <div className="bg-red-500 text-white font-bold p-4 ">
            Chuyển tiền
          </div>
          <div className="flex relative">
            <button
              className="btn-primary rounded-none flex-1"
              onClick={() => setTransType(1)}
            >
              Tới ví
            </button>
            <button
              className="btn-primary rounded-none flex-1"
              onClick={() => setTransType(2)}
            >
              Tới ngân hàng
            </button>
            <div
              className={` w-[50%] h-[2px] bg-red-600 absolute transition-all  duration-300 bottom-0 ${
                transType == 2 ? "left-[50%]" : ""
              }`}
            ></div>
          </div>
          <div className="p-4">
            {transType == 2 && (
              <div className="form-control">
                <label className="form-label">Chọn ngân hàng</label>
                <select className="form-input">
                  <option>Agribank</option>
                  <option>Agribank</option>
                </select>
              </div>
            )}
            <div className="form-control">
              <label className="form-label">Số tài khoản</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-control">
              <label className="form-label">Số tiền</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-control">
              <label className="form-label">Ghi chú</label>
              <input type="text" className="form-input" />
            </div>
            <button className="form-btn">Chuyển tiền</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferMoney;
