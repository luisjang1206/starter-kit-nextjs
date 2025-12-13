import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, Info } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export const metadata = {
  title: "Components",
  description: "Component showcase and examples",
};

export default function ComponentsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Component Showcase</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore the available ShadcnUI components in this starter kit.
        </p>
      </div>

      <div className="space-y-12">
        {/* Buttons Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">+</Button>
          </div>
        </section>

        {/* Input Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Input & Textarea</h2>
          <Separator className="mb-6" />
          <div className="grid max-w-md gap-4">
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled" />
            <Textarea placeholder="Enter your message..." />
          </div>
        </section>

        {/* Form Controls Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Form Controls</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                Accept terms and conditions
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="airplane-mode" />
              <label htmlFor="airplane-mode" className="text-sm">
                Airplane Mode
              </label>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Card</h2>
          <Separator className="mb-6" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>With input and button</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter something..." />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Badge Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Badge</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Avatar Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Avatar</h2>
          <Separator className="mb-6" />
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Alert Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Alerts</h2>
          <Separator className="mb-6" />
          <div className="grid gap-4 max-w-2xl">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert message.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Tabs Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Tabs</h2>
          <Separator className="mb-6" />
          <Tabs defaultValue="account" className="max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <p className="text-muted-foreground">
                Make changes to your account here.
              </p>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <p className="text-muted-foreground">
                Change your password here.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p className="text-muted-foreground">
                Manage your settings here.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Accordion Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Accordion</h2>
          <Separator className="mb-6" />
          <Accordion type="single" collapsible className="max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles using Tailwind CSS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default with smooth transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Skeleton Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Skeleton</h2>
          <Separator className="mb-6" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>

        {/* Theme Toggle Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Theme Toggle</h2>
          <Separator className="mb-6" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-muted-foreground">Click to toggle theme</span>
          </div>
        </section>
      </div>
    </div>
  );
}
