
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 -z-10 blur-3xl rounded-full transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-8 animate-fade-up">
            <div>
              <p className="subtitle animate-fade-up animate-delay-100">Chief Executive Officer & Full Stack Developer</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight animate-fade-up animate-delay-200">
                Newton Brian <br /> 
                <span className="text-primary">Wanyonyi</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up animate-delay-300">
                Co-founder and computer science student with expertise in full stack development. 
                Passionate about creating innovative solutions and leading teams to success.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
              <Button size="lg" className="rounded-full" asChild>
                <a href="/Newton_Brian_Resume.pdf" download>Download Resume</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden border-2 border-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDE1OTE0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                  alt="Newton Brian Wanyonyi" 
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm font-medium"
            aria-label="Scroll down"
          >
            <span className="mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
