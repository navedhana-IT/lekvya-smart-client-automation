import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInPage, SignUpPage, Testimonial } from "@/components/ui/sign-in";
import logo from "@/assets/lekvya-logo-new.png";



export default function Login() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
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
            onSignIn={(e) => {
              e.preventDefault();
              // TODO: integrate auth
              console.log("Sign In submitted");
            }}
            onResetPassword={() => console.log("Reset Password")}
            onCreateAccount={() => setMode("signup")}
          />
        ) : (
          <SignUpPage
            onSignUp={(e) => {
              e.preventDefault();
              // TODO: integrate auth
              console.log("Sign Up submitted");
            }}
            onSignIn={() => setMode("signin")}
          />
        )}
      </div>
    </div>
  );
}
