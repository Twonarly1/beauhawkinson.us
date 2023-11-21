"use client";

import { useEffect } from "react";

import { Button } from "components/core";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-48">
      <h2 className="text-lg font-bold">Something went wrong!</h2>
      <Button
        variant="primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
