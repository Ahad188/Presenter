import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useClass = ()=>{
     const {user} = useAuth();
     const {refetch, data: classes = []} = useQuery({
          queryKey:['my-class',user?.email],
          queryFn : async()=>{
               const res = await fetch(`http://localhost:5000/my-class?email=${user?.email}`)
               return res.json()
          }
     })
     return [classes,refetch]
}


export default useClass;