import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";

const bodyFont = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProfileCard />
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
