"use client";

import { useTina } from "tinacms/dist/react";
import PageServer from "./PageServer";

export default function PageClient({ query, variables, data }) {
  const { data: tinaData } = useTina({
    query: query,
    variables: variables,
    data: data,
  });

  return <PageServer data={tinaData} />;
}
