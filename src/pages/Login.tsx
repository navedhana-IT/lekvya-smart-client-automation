import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInPage, SignUpPage, Testimonial } from "@/components/ui/sign-in";
import logo from "@/assets/lekvya-logo-new.png";

const heroImage =
  "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80";

const testimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing platform! The automation workflows are seamless.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This service has transformed how our CA firm handles clients.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Martinez",
    handle: "@davidcreates",
    text: "Intuitive, reliable, and genuinely helpful for productivity.",
  },
];

export default function Login() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar with logo + back link */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-lg border-b border-border">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={logo} alt="Lekvya" className="h-10 w-auto object-contain" />
        </a>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
          <button
            id="tab-signin"
            onClick={() => setMode("signin")}
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              mode === "signin"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign In
          </button>
          <button
            id="tab-signup"
            onClick={() => setMode("signup")}
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              mode === "signup"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Create Account
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </button>
      </header>

      {/* Page content — offset for fixed header */}
      <div className="pt-16">
        {mode === "signin" ? (
          <SignInPage
            title={
              <span>
                Welcome{" "}
                <span className="text-gradient">back</span>
              </span>
            }
            description="Sign in to your Lekvya account and automate smarter."
            heroImageSrc={heroImage}
            testimonials={testimonials}
            onSignIn={(e) => {
              e.preventDefault();
              // TODO: integrate auth
              console.log("Sign In submitted");
            }}
            onGoogleSignIn={() => console.log("Google Sign In")}
            onResetPassword={() => console.log("Reset Password")}
            onCreateAccount={() => setMode("signup")}
          />
        ) : (
          <SignUpPage
            heroImageSrc={heroImage}
            testimonials={testimonials}
            onSignUp={(e) => {
              e.preventDefault();
              // TODO: integrate auth
              console.log("Sign Up submitted");
            }}
            onGoogleSignUp={() => console.log("Google Sign Up")}
            onSignIn={() => setMode("signin")}
          />
        )}
      </div>
    </div>
  );
}
