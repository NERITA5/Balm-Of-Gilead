import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Balm of Gilead Higher Institute | Empowering Future Leaders",
  description:
    "Balm of Gilead Higher Institute of Biomedical Science and Technology — quality education in health, technology, business, and agriculture. Affiliated with the University of Bamenda.",
  keywords: "Balm of Gilead, Higher Institute, Biomedical, Cameroon, University of Bamenda, Tombel, Limbe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}