import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
// import styles from "@/app/ui/home.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
