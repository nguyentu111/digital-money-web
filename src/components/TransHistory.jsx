export default function TransHistory() {
  return (
    <div className="flex flex-col p-4 rounded-lg shadow-lg h-fit">
      <div className="p-3 text-lg font-bold">Lịch sử giao dịch</div>
      <div>
        <div className="bg-green-500 text-white font-bold p-2 rounded-md">
          Tháng 3/ 2023
        </div>
        <div className="flex gap-3 p-2">
          <div>
            <img className="rounded-full w-12 h-12 border-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">
              Chuyển tiền cho Le Van Lam
            </span>
            <div>
              <span>02:02pm 12/3/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
