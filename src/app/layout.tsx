import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { fontVariables } from "@/styles/fonts";
import { Providers } from "./providers";
import "@/styles/globals.css";

const { seo } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: seo.defaultTitle, template: seo.titleTemplate },
  description: seo.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={seo.locale.split("_")[0]} className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
