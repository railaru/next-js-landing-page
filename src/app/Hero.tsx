import React from "react";

export default function Hero() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="space-y-6 max-w-[600px]">
          <h1 className="font-[700] text-4xl">
            Innovative productivity app for teams
          </h1>

          <h3 className="text-lg text-gray-600">
            We help teams to be more productive by providing a simple and
            intuitive tool to manage their tasks.
          </h3>

          <div className="space-x-4">
            <a role="button" className="btn">
              Get started
            </a>

            <a role="button" className="btn btn-ghost">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="assets/images/mock-photo-1.jpg"
          alt="Mock photo"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
