export type Blog = {
    id: string;
    title: string;
    description: string;
    date: string;
    slug: string;
  };
  
  export const blogData: Blog[] = [
    {
      id: "fuck-around-find-out",
      title: "How to Fuck Around and Find Out",
      description: "A guide to the unconventional way of learning.",
      date: "August 22, 2026",
      slug: "how-to-fuck-around-and-find-out",
    },
    {
      id: "cursor-code-indexing",
      title: "A deep dive into Cursor’s Code Indexing",
      description: "How cursor's code indexing actually works?",
      date: "July 28, 2026",
      slug: "cursor-code-indexing",
    },
    {
      id: "ai-paralysis",
      title: "The AI Paralysis",
      description: "Why more AI tools aren't making people more capable.",
      date: "June 18, 2026",
      slug: "the-ai-paralysis",
    },
  ];