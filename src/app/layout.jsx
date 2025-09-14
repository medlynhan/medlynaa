import "../styles/globals.css";

export const metadata = {
  title: "Medlynhan",
  description: "Software Engineer",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className=" md:text-base text-gray-300">
        
        {children}
      </body>
    </html>
  );
}
