 
import ReusableSubHero from "@/components/ReusableSubHero";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ReusableSubHero />
      {children}
    </div>
  );
}
