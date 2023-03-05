import { useNavigate } from "react-router-dom";

function SignIn() {
  const nav = useNavigate();
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
          <button onClick={() => nav("/")} className="form-btn w-full">
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
