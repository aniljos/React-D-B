import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next React About",
};


export default function AboutPage(){

   // throw new Error("error for testing");

    return (
        <div>
            <h3>About</h3>
            <p>This is a Next.js 15 application</p>
        </div>
    )
}