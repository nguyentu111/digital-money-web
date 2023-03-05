import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSignin from "../hooks/useSignin";
function SignIn() {
  const nav = useNavigate();
  const callback = (result) => console.log(result);
  // const mutate = useSignin(callback);
  // const handleLogin = () =>
  //   mutate.mutate({ phone_number: "0987123123", password: "ThanhNghi123`" });
  useEffect(() => {
    axios
      .post(
        "https://project.ewallet.vn/e-wallet/public/api/login",
        {
          phone_number: "0987123123",
          password: "ThanhNghi123`",
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((rs) => console.log(rs));
    // fetch("https://project.ewallet.vn/e-wallet/public/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     phone_number: "0987123123",
    //     password: "ThanhNghi123`",
    //   }),
    // });
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="m-auto min-w-[400px] max-w-full p-4 rounded-lg shadow-lg">
        <div className="text-center font-bold text-xl">Đăng nhập</div>
        <div className="">
          <div className="form-control">
            <label className="form-label">Số điện thoại</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-control">
            <label className="form-label">Mật khẩu</label>
            <input type="password" className="form-input" />
          </div>
          <button className="form-btn w-full">Đăng nhập</button>
          <span>
            Chưa có tài khoản
            <span
              onClick={() => nav("/signup")}
              className="text-blue-500 hover:underline mx-2 cursor-pointer"
            >
              Đăng kí
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
