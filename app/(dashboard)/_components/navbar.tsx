import { NavbarRoutes } from "@/components/navber-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () =>{
    return(
        <div className="p-4 boder-bottom h-full flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}