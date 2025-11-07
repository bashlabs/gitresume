"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      const url = "https://sheetdb.io/api/v1/blzfpi604nplm";
      const data = {
        email,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`, // Secure header
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return alert(
          `HTTP error! Status: ${response.status}. Message: ${errorText}`
        );
      }
      await response.json();
    } catch (error) {
      console.error("Error connecting to API:", error);
      alert("An error occured while submitting, please try again later.");
    } finally {
      setEmail("");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="mt-20 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
          Be the first to experience{" "}
          <span className="text-primary">GitResume Cloud</span>
        </h1>
        <p className="text-gray-500 mt-2 mb-6">
          Join the waitlist and be among the first to experience GitResume. A
          smarter way to build your developer resume.
        </p>
        {/* Email Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your e-mail"
              className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7acbcf] focus:border-blue-500 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#2596be] hover:bg-[#7acbcf] text-white font-semibold transition-transform hover:scale-[1.02]"
              disabled={submitted}
            >
              Get Early Access
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-medium mt-4 animate-fade-in">
            🎉 You’re on the waitlist! We’ll notify you soon.
          </p>
        )}
      </section>
    </main>
  );
}
