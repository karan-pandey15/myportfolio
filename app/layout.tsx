import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Video from "./components/Video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Karan Pandey",
    default: "Karan Pandey"
  },
  description: 'Karan Pandey Portfolio',
  authors: [{name: "Karan Pandey"}],
  creator: "Karan Pandey",
  publisher: "Karan Pandey",
  keywords: ["Portfolio", "Karan Pandey", "Developer", "FullStack Developer", "React Developer", "Javascript",
    "karan Portfolio","Ruloans Portfio","fullstack portfolio",
    
  ],
  
}

const roboto = Roboto({weight: "400",subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="bg-[url('/img/parabolic-pentagon.png')] bg-cover bg-fixed bg-no-repeat text-gray-200">
        <main className={roboto.className} >
          <Video />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
