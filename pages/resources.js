import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor, PortableText } from "../sanity.js";
import { getClient } from "../sanity.server";

const postsQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

export default function Resources({ data, preview }) {

console.log(data.posts)
 

  return (
    <article>
   
    </article>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const posts = await getClient(preview).fetch(postsQuery);
 
  console.log(posts)

  return {
    props: {
      preview,
      data: { posts },
    },
  };
}
