import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Analytics } from "@vercel/analytics/react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Board",
  description: "Developed by Web Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
