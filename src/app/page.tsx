import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen p-4 md:p-10">
          <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
            Hello, there!
          </h1>
          <h2 className="text-secondry text-xl font-semibold tracking-tight md:text-2xl pt-3">
           I'm Sameer Jangid.
          </h2>
          <p className="text-secondry max-w-lg pt-2 text-sm md:text-base">
          I'm a software developer focused on building reliable, scalable web applications and solving real-world problems.
          </p>
        </Container>
      </div>
    </>
  );
}
