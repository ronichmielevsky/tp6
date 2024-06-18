import "./skeleton.css";
import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={children.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
