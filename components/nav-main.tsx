"use client"

import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useState } from "react"
import {motion} from "framer-motion"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import Link from "next/link"
export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: Array<{
      title: string
      url: string
    }>
  }[]
}) {

     const [openItem, setOpenItem] = useState<string | null>(null);
       const {lang} = useAppSelector(state=> state.cart)
       const Router = useRouter()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu >
        {items.map((item) => {
          const isOpen = openItem === item.title;

          return (
            <Collapsible
              key={item.title}
              asChild
              open={isOpen}
              onOpenChange={(open) =>
                setOpenItem(open ? item.title : null)
              }
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center text-start" tooltip={item.title} onClick={()=> Router.push(`${item.url}`)}>
                    {item.icon && <item.icon />}
                    <span className="grow ">{item.title}</span>
                   { ( item?.items &&item?.items.length > 0) &&<>
                     {lang?<ChevronRight className="ml-auto transition-transform duration-200 
                    group-data-[state=open]/collapsible:rotate-90" />:
                    <ChevronLeft className="ml-auto transition-transform duration-200 
                    group-data-[state=open]/collapsible:-rotate-90" />
                    }
                   </> 
                    
                    }
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent  asChild forceMount>
                {/* <AnimatePresence initial={false}>
                  {isOpen && ( */}
      <motion.div
        key="content"
        initial={false}
         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
         style={{ overflow: "hidden" }}
      >
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                  </motion.div>
                   {/* )}
                  </AnimatePresence> */}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
