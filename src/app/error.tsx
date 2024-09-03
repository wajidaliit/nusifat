"use client";
import Button from "@/components/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">{error.message}</h2>
      <Button onClick={() => reset()}>Refresh Page Or go to back</Button>
    </div>
  );
}
