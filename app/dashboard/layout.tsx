"use client"
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "../_ui/navbar/Header";
import { I18nProviderWrapper } from "../_ui/wrapper/I18nProviderWrapper";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAddOrderPage = pathname.includes("/addorder");

  return (
    <div>
      <I18nProviderWrapper>
        <SidebarProvider>
     { !isAddOrderPage && <AppSidebar />}
      <SidebarInset className="">
       {!isAddOrderPage&&<Header/>}
        {children}
      </SidebarInset>
    </SidebarProvider>
    </I18nProviderWrapper>
     
    </div>
  );
}
