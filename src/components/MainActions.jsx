import NapTien from "../assets/imgs/naptien.png";
import RutTien from "../assets/imgs/ruttien.png";
import ChuyenTien from "../assets/imgs/chuyentien.png";
import { useNavigate } from "react-router-dom";

function MainActions() {
  const nav = useNavigate();
  return (
    <div className="flex p-4 rounded-lg shadow-lg justify-evenly items-center text-center">
      <div className="cursor-pointer" onClick={() => nav("/deposit")}>
        <img src={NapTien} className="w-12 h-12 m-auto" />
        <span className="font-bold">Nạp tiền</span>
      </div>
      <div className="cursor-pointer" onClick={() => nav("/withdraw")}>
        <img src={RutTien} className="w-12 m-auto h-12 " />
        <span className="font-bold">Rút tiền</span>
      </div>
      <div className="cursor-pointer" onClick={() => nav("/transfer")}>
        <img src={ChuyenTien} className="w-12 m-auto h-12" />
        <span className="font-bold">Chuyển tiền</span>
      </div>
    </div>
  );
}

export default MainActions;
