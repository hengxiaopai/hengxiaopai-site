import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name}｜AI 与 OPC 高杠杆科技工作室`,
  description: site.description,
  metadataBase: new URL("https://hengxiaopai.com"),
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://hengxiaopai.com",
    siteName: site.name,
    locale: "zh_CN",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="noise">{children}</body>
    </html>
  );
}
