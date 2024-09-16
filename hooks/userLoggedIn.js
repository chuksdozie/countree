import { useSelector } from "react-redux";

const useLoggedInUser = () => {
  const account = useSelector((state) => state.account);
  return {
    userProfile: account?.user,
  };
};

export default useLoggedInUser;
