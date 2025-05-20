import React, { useState, useEffect } from "react";
import { Toaster as SonnerToaster, toast } from "sonner";

const Toaster = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detect system dark mode preference
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkQuery.matches ? "dark" : "light");

    // Listen for changes in system preference
    const listener = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkQuery.addEventListener("change", listener);

    // Cleanup listener on unmount
    return () => {
      darkQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      position="bottom-right"
      expand={false}
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
        duration: 4000,
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
