import Link from 'next/link';

const Navbar = () => { // Navbar component for website
    return (
        <nav class="bg-red-500 text-blue text-xl p-4 flex justify-between items-center">
            <div className='font-bold text-black'>IMR Movie App</div>
            <div>
                    <Link button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded" href="/">
                        Home
                    </Link>
                
                    <Link button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded" href="/admin">
                        Admin
                    </Link>
            </div>
                
        </nav>
    );
};

export default Navbar;
