import "../styles/globals.css";

export const metadata = {
  title: "Medlynhan",
  description: "Software Engineer",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="fade-in-down md:text-base">
        
        {children}
      </body>
    </html>
  );
}
