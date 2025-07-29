import "../styles/globals.css";

export const metadata = {
  title: "Medlynhan",
  description: "Software Engineer",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
