import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor, PortableText } from "../sanity.js";
import { getClient } from "../sanity.server";

const authorQuery = groq`
  *[_type == "tutor"][0] {
    _id,
    name,
  }
`;

export default function Team({ data, preview }) {
  const { data: author } = usePreviewSubscription(authorQuery, {
    params: { slug: data.author?.slug },
    initialData: data.author,
    enabled: preview && data.author?.slug,
  });

  const { name } = author;

  return (
    <article>
      <h2>{name}</h2>
    </article>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const author = await getClient(preview).fetch(authorQuery);
  console.log(author);

  return {
    props: {
      preview,
      data: { author },
    },
  };
}
