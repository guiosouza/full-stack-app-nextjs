import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Conect With Entrepeneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideias, Vote on Pitches, and Get Noticed in Virtual
          Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
