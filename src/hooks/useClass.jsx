import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem('Token');
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["my-class", user?.email],
    enabled: !loading,
    // queryFn : async()=>{
    //      const res = await fetch(` https://presenter-server.vercel.app/my-class?email=${user?.email}`)
    //      console.log(res);
    //      return res.json();
    // }

    queryFn: async () => {
      const res = await axiosSecure(`/my-class?email=${user?.email}`);
      return res.data;
    },
  });
  return [classes, refetch];
};

export default useClass;
