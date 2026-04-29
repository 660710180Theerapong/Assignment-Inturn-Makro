
import Link from "next/link"

export default function NavBar({children}){
    return(
        <div>
            <nav>
                <Link href="/">My Profile</Link>
                <Link href="/opinion">Opinion Form</Link>
                <Link href="/opinion_board">Opinion Board</Link>

            </nav>
            
            {children}
        </div>
        
    )
} 