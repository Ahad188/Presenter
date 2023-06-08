import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useClass = ()=>{
     const {user,loading} = useAuth();
     const [axiosSecure] = useAxiosSecure();
     
     const {refetch, data: classes = []} = useQuery({
          queryKey:['my-class',user?.email],
          enabled: !loading,
          queryFn : async()=>{
               const res = await axiosSecure(`/my-class?email=${user?.email}`)
               return res.data
          }
     })
     return [classes,refetch]
}


export default useClass;