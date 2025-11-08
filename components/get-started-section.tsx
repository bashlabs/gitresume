"use client";
import { useEffect, useState } from "react";

const descriptions = [
  "Setup app config",
  "extract commit messages and tech stacks and frameworks",
  "Start a local http server for your personalized dashboard",
];

export default function GettingStarted() {
  function getOSArch(): string {
    if (typeof navigator === "undefined") return "unknown";
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    let arch = "unknown";
    if (
      userAgent.includes("wow64") ||
      userAgent.includes("win64") ||
      userAgent.includes("x86_64")
    ) {
      arch = "x64";
    } else if (userAgent.includes("arm") || userAgent.includes("aarch64")) {
      arch = "arm";
    } else if (userAgent.includes("i686") || userAgent.includes("i386")) {
      arch = "x86";
    }

    let os = "unknown";
    if (platform.includes("win")) os = "windows";
    else if (platform.includes("mac")) os = "mac";
    else if (platform.includes("linux")) os = "linux";

    return os;
  }
  const defaultBrowser = getOSArch();
  const [os, setOs] = useState("windows");

  useEffect(() => {
    setOs(defaultBrowser || "os");
  }, []);

  const commands = ["gitresume init", "gitresume seed", "gitresume serve"];
  const installCmd: Record<string, any> = {
    mac: {
      install: "brew install gitresume",
      commands,
    },
    linux: {
      install:
        "curl -sL https://raw.githubusercontent.com/iamhabbeboy/gitresume-cli/main/install.sh | bash",
      commands,
    },
    windows: {
      install: "choco install gitresume",
      commands: [
        "gitresume.exe init",
        "gitresume.exe seed",
        "gitresume.exe serve",
      ],
    },
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900" id="setup">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Getting Started
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Install{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Gitresume
          </span>{" "}
          CLI on your system and start building your resume from your Git
          commits.
        </p>

        {/* OS Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          {["mac", "linux", "windows"].map((platform) => (
            <button
              key={platform}
              onClick={() => setOs(platform)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                os === platform
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Command Box */}
        <div className="pt-8">
          <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto border">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-left font-mono text-sm space-y-2">
              <div className="text-muted-foreground">
                $ {installCmd[os] && installCmd[os].install}
              </div>
              <div className="text-muted-foreground">...</div>
              <div className="text-gray-500"># Once installed, run: </div>
              {installCmd[os].commands.length > 0 &&
                installCmd[os].commands.map(
                  (command: string, index: number) => (
                    <div key={index}>
                      <div className="text-gray-500">
                        # {descriptions[index]}
                      </div>
                      <div className="text-muted-foreground">$ {command}</div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
