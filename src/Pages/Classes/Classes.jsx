// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PopularCard from "../Home/PopularClass/PopularCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("   https://presenter-server.vercel.app/classes");
      return res.json();
    },
  });

  return (
    <>
      <Helmet>
        <title>Presenter / Classes</title>
      </Helmet>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {classes?.map((data) => (
          <PopularCard key={data._id} data={data}></PopularCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
