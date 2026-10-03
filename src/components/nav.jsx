const Navbar = ({setPage, setSidebarOpen}) => {

    return (
        <nav className="navbar">
            <div className="nav__item">
                <button onClick={() => setPage("counter")}>Counter Application</button>
                <button onClick={() => setPage("random")}>Random Number Generator</button>
            </div>
            <button className="menu-btn" onClick={()=>setSidebarOpen(true)}>☰</button>
        </nav>
    )
}
export default Navbar