import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationFix from "@/components/HydrationFix";
import AuthProvider from "@/components/authProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Massimo Resto",
  description: "Massimo Resto website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <HydrationFix>
                <Notification />
                <Navbar />
                {children}
                <Footer />
                <ToastContainer position="top-right" />
              </HydrationFix>
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
