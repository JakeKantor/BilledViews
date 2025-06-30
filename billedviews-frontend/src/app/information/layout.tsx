import { Footer } from "@/components/why-billedviews/Footer";
import { Header } from "@/components/why-billedviews/Header";

export default function InformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
