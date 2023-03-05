import Header from "../patials/Header";

function WithDrawMoney() {
  return (
    <div className="m-auto flex flex-col h-screen">
      <Header />
      <div className=" flex-1 flex flex-col justify-center">
        <div className="max-w-full w-[600px] shadow-lg m-auto rounded-lg overflow-hidden">
          <div className="bg-red-500 text-white font-bold p-4 ">Rút tiền</div>
          <div className="p-4">
            <div className="form-control">
              <label className="form-label">Chọn ngân hàng</label>
              <select className="form-input">
                <option>Agribank</option>
                <option>Agribank</option>
              </select>
            </div>

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
            <button className="form-btn">Rút tiền</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithDrawMoney;
