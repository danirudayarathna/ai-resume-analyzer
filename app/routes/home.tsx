import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVaid" },
    { name: "description", content: "Smart way to improve your Resume!" },
  ];
}

export default function Home() {
    return <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
        <section className={"main-section"}>
            <div className={"page-heading"}>
                <h1>Track Your Application & Resume Ratings</h1>
                <h2>Review your submissions and check AI-Powered feedback</h2>
            </div>

        </section>
    </main>;
}
