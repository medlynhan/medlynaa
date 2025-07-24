import "../styles/globals.css";

export const metadata = {
  title: "Medlynhan",
  description: "Software Engineer",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-screen text-(--gray) bg-(--white)">
      
        {children}
      </body>
    </html>
  );
}
