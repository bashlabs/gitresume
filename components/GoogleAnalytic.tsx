"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-FYF2KSXYD2`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FYF2KSXYD2');
        `}
      </Script>
    </>
  );
}
