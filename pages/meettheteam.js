import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor, PortableText } from "../sanity.js";
import { getClient } from "../sanity.server";
import TeamMember from "../components/TeamMember/TeamMember";

const authorQuery = groq`
  *[_type == "tutor"] {
    _id,
    name,
    title
  }
`;

export default function Team({ data }) {
  

  return (
    <div className="grid grid-cols-3">
      {data.tutor.map((tutor) => (
        <TeamMember name={tutor.name} />
      ))}
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const tutor = await getClient(preview).fetch(authorQuery);

  return {
    props: {
      preview,
      data: { tutor },
    },
  };
}
