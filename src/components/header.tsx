const Header = () => {
  return (
    <header className='bg-[#5100B1] p-4 font-inter'>
        <nav className='flex justify-between items-center max-w-6xl mx-auto'>
        <a href='/' className='text-[#F0CCB0] text-2xl font-bold flex'>STS <h6 className="text-[15px]">Blogs</h6></a>

        <ul className='flex items-center gap-4'>
            <li>
                <a href='/blogs' className='text-[#F0CCB0] hover:underline'>Blogs</a>
            </li>

            <li>
                <a href='/api/auth/signin' className='text-[#F0CCB0] hover:underline'>Login</a>
            </li>
        </ul>

        </nav>
    </header>
)
}

export default Header;