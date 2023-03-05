import { useNavigate } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";
export default function Header() {
  const nav = useNavigate();
  return (
    <div className="border-b-2 ">
      <div className="flex justify-between max-w-[1200px] m-auto items-center ">
        <img
          onClick={() => nav("/")}
          className="p-2 w-[120px] h-[60px] px-2 cursor-pointer"
          src={logo}
        />
        <div className="flex gap-3">
          <div>Nguyễn Anh Tú</div>
          <div className="hover:underline cursor-pointer"> Đăng xuất </div>
        </div>
      </div>
    </div>
  );
}
