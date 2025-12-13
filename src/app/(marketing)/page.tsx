import Link from "next/link";
import {
  Palette,
  Moon,
  Layers,
  Zap,
  Code2,
  LayoutTemplate,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    description: "Latest Next.js with App Router and React 19 support",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "CSS-first configuration with OKLCH color system",
  },
  {
    icon: Layers,
    title: "ShadcnUI",
    description: "Beautiful, accessible components with new-york style",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "System-aware theme switching with next-themes",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Full type safety with strict TypeScript configuration",
  },
  {
    icon: LayoutTemplate,
    title: "Layout Components",
    description: "Pre-built header, footer, sidebar, and mobile navigation",
  },
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "Tailwind CSS v4",
  "ShadcnUI",
  "Lucide Icons",
  "usehooks-ts",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            v1.0.0
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Next.js Starter Kit
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A modern, extensible foundation for building web applications with
            Next.js 16, Tailwind CSS v4, and ShadcnUI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/components">Browse Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </>
  );
}
