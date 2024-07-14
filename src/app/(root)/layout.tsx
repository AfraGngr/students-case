import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex w-screen h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
