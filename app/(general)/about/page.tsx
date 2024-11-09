import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "About page description",
};

export default function AboutPage() {
    return <span className="text-7xl">About Page</span>;
}
