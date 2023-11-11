import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { getServerSession } from "next-auth";

import { Header } from "../components/";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCC Skills",
  description: "ESTA TCC Website for courses",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   const isAuth = localStorage.getItem("userId") !== undefined;

  //   if (!isAuth) redirect("/login");
  // });

  const session = await getServerSession(authConfig);
  await loginIsRequiredServer();

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://unsplash.it/36" />
      </head>
      <body className={`${inter.className} bg-gray-200 h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
