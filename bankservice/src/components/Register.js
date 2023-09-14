import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/fetchuserSlice";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);
  

  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);

  return <div>
    Register
  </div>;
};
export default Register;
