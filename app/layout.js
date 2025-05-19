import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <nav>
          <Link href="/"><Image src="/logoUnif.png" alt="logo" width={50} height={50} style={{cursor: "pointer"}}/></Link>
          <div className="topNavIcon">
            <i className="fa-solid fa-user btn-nav"></i>
            <i className="fa-solid fa-cart-shopping btn-nav"></i>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
