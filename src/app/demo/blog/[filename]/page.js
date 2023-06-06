import client from "../../../../../tina/__generated__/client";
import { draftMode } from "next/headers";
import PageClient from "./PageClient";
import PageServer from "./PageServer";

export default async function Page({ params: { filename } }) {
  const res = await client.queries.post({
    relativePath: `${filename}.md`,
  });

  const { isEnabled } = draftMode();

  return <>{isEnabled ? <PageClient {...res} /> : <PageServer {...res} />}</>;
}

export async function generateStaticParams() {
  const postsListData = await client.queries.postConnection();

  return postsListData.data.postConnection.edges.map((post) => ({
    filename: post.node._sys.filename,
  }));
}
