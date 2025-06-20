import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import ReduxProvider from "@/redux/ReduxProvider";




export const metadata: Metadata = {
  title: "Next React",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <ReduxProvider>
            <AppBar />
            <main style={{ border: "2px solid slateblue", margin: "5px", padding: "7px" }}>
              {children}
            </main>
          </ReduxProvider>

        </div>


      </body>
    </html>
  );
}
