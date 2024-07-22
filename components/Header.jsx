import Link from 'next/link';
import { auth } from '@/utils/auth';

// components
import Links from './Links';


const Header = async () => {

    const session = await auth();
    // console.log("Session:", session);

    return (
        <header className="px-12 py-6 bg-slate-800" id="peggy">
            <div className="flex items-center justify-between ml-10 ">
                <Link href="/" className="text-3xl font-bold font-sans text-indigo-400">P e g g y ' s</Link>
                <Links session={session} />
            </div>
            
        </header>
    )
}

export default Header
