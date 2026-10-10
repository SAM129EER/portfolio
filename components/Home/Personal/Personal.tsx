import { PersonalLinks } from "./PersonalLinks";

function Personal() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Personal
      </h2>

      <div className="space-y-2">
        <PersonalLinks
          title="Books"
          description="Books that have influenced my thinking and growth."
          href="/books"
        />

        <PersonalLinks
          title="Movies"
          description="Films and shows that have inspired and entertained me."
          href="/movies"
        />
      </div>
    </section>
  );
}

export default Personal;