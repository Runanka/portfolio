import bgImage from "@/public/bg.jpg";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[#F5F5DC]">{children}</div>;
}
