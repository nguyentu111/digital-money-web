import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../constant";
function useSignin(cb) {
  return useMutation(
    (data) => {
      return axiosClient.post("/login", data);
    },
    {
      onSuccess: cb,
    }
  );
}

export default useSignin;
