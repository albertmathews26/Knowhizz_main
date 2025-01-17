import { FunctionComponent } from "react"
import { buttonVariants } from "@/src/components/ui/Button";
import { cn } from '@/src/lib/utils'
import Link from "next/link"; 
const page: FunctionComponent = () => {
    return (    <div className="absolute inset=0">
            <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
                <Link
                 href="/" 
                  className={cn(buttonVariants({variant:'ghost'}))}>
                   Home
                </Link>
                </div>
                </div> 
                )
    }
     
  
 
export default page;