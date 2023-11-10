import Wrapper from "@/components/Wrepper";
import "./globals.css";

export const metadata = {
  title: "Job finder",
  description: "sdfjksldjf",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body suppressHydrationWarning >
        <Wrapper>

          {children}
          
        </Wrapper>
      </body>
    </html>
  );
}
