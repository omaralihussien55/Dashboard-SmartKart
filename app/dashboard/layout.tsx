"use client"
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "../_ui/navbar/Header";
import { I18nProviderWrapper } from "../_ui/wrapper/I18nProviderWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div>
      <I18nProviderWrapper>
        <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
      <Header/>
        {children}
      </SidebarInset>
    </SidebarProvider>
    </I18nProviderWrapper>
     
    </div>
  );
}
