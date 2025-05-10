import "@/app/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Honour Point",
  description: "Next.js app with Bootstrap and shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}