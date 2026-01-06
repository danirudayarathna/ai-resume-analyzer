import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {resume} from "react-dom/server";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVaid" },
    { name: "description", content: "Smart way to improve your Resume!" },
  ];
}

export default function Home() {
    // @ts-ignore
    return <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
        <Navbar/>
        <section className={"main-section"}>
            <div className={"page-heading"}>
                <h1>Track Your Application & Resume Ratings</h1>
                <h2>Review your submissions and check AI-Powered feedback</h2>
            </div>

        </section>

        {resumes.length > 0 && (
        <div className={"resumes-section"}>
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume}/>
            ))}
        </div>
        )}

    </main>;
}
