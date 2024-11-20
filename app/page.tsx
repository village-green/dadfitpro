import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Clock, Heart, TrendingUp } from "lucide-react";
import Link from "next/link";

const valueProps = [
  {
    icon: Clock,
    title: "Flexible Workouts",
    description: "15-60 minute routines to fit your schedule"
  },
  {
    icon: Dumbbell,
    title: "Home Equipment",
    description: "Transform your body with just adjustable dumbbells"
  },
  {
    icon: Heart,
    title: "Family First",
    description: "Stay present while achieving your fitness goals"
  },
  {
    icon: TrendingUp,
    title: "Real Results",
    description: "Join thousands of dads who've transformed their lives"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Look Better. Feel Better.<br />
              <span className="text-white">Be the Husband She Can't Stop Staring At.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your body with workouts that fit your schedule, without ever leaving home.
              Perfect for busy dads who want to look and feel amazing.
            </p>
            <Button size="lg" className="text-lg" asChild>
              <Link href="/products">
                Find your Perfect Customizable Dumbbells
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Transform Your Life, Not Your Schedule
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="p-6">
                <div className="mb-4">
                  <prop.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}