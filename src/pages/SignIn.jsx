import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { axiosClient } from "../constant";
function SignIn() {
  const nav = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const mutate = useMutation(
    (data) => {
      return axiosClient.post("/login", data);
    },
    {
      onSuccess: (result) => {
        const rs_status = result.data.status;
        if (rs_status === "success") {
          toast.success("Đăng nhập thành công");
          localStorage.setItem("user", JSON.stringify(result.data.data));
          nav("/");
        } else {
          toast.error("Đăng nhập thất bại");
          console.log(result.data);
        }
      },
      onError: () => {
        toast.error("Đăng nhập thất bại");
      },
    }
  );
  const handleLogin = () =>
    mutate.mutate({ phone_number: phoneNumber, password });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="m-auto min-w-[400px] max-w-full p-4 rounded-lg shadow-lg">
        <div className="text-center font-bold text-xl">Đăng nhập</div>
        <div className="">
          <div className="form-control">
            <label className="form-label">Số điện thoại</label>
            <input
              type="text"
              className="form-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form-btn w-full" onClick={handleLogin}>
            Đăng nhập
          </button>
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
