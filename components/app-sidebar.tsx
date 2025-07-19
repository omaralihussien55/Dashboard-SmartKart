"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useAppSelector } from "@/redux/hooks"
import { useTranslation } from "react-i18next"

// This is sample data.




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {lang} = useAppSelector(state=> state.cart)
  const {t} = useTranslation()

  const data = React.useMemo(() => ({
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
      { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
      { name: "Evil Corp.", logo: Command, plan: "Free" },
    ],
    navMain: [
      {
        title: t("sidebar.dashboard"),
        url: "/dashboard/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: t("sidebar.menu.title"),
        url: "#",
        icon: Bot,
        items: [
          { title: t("sidebar.menu.Products"), url: "/dashboard/products" },
          { title: t("sidebar.menu.category"), url: "/dashboard/categories" },
          { title: t("sidebar.menu.orders"), url: "/dashboard/orders" },
        ],
      },
      {
        title: t("sidebar.manger.title"),
        url: "#",
        icon: BookOpen,
        items: [
          { title: t("sidebar.manger.discount"), url: "/dashboard/discounts" },
          { title: t("sidebar.manger.gift"), url: "/dashboard/coupons" },
          { title: t("sidebar.manger.coupoun"), url: "/dashboard/gifts" },
        ],
      },
      {
        title: t("sidebar.setting"),
        url: "#",
        icon: Settings2,
        items: [
          { title: "General", url: "#" },
          { title: "Team", url: "#" },
          { title: "Billing", url: "#" },
          { title: "Limits", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Design Engineering", url: "#", icon: Frame },
      { name: "Sales & Marketing", url: "#", icon: PieChart },
      { name: "Travel", url: "#", icon: Map },
    ],
  }), [t, lang])
  return (
    <Sidebar collapsible="icon" {...props} side={lang?"left":"right"}  
    
    >
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>


      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>


      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
