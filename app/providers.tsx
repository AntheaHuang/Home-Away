"use client";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme-providers";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{ duration: 3000 }}
        richColors
        closeButton
        theme="light"
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;
