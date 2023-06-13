"use client";

import { useTina } from "tinacms/dist/react";
import PageServer from "./PageServer";

export default function PageClient({ query, variables, data }) {
  const { data: tinaData } = useTina({
    query: query,
    variables: variables,
    data: data,
  });

  return (
    <>
      <div className="m-6 inline-block bg-red-100 p-6 uppercase text-slate-900">
        This is rendered on the Client
      </div>
      <PageServer data={tinaData} />
    </>
  );
}
