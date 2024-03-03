import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PaperPigeon",
  description: "A File transfer tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} h-screen`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
