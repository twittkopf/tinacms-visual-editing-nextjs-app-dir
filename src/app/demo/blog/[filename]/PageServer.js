import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function PageServer({ data }) {
  return (
    <>
      <h1>{data.post.title}</h1>
      <TinaMarkdown content={data.post.body} />
    </>
  );
}
