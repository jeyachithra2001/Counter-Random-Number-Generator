const Sidebar = ({ setPage, sidebarOpen, setSidebarOpen }) => {

    const handlePageChange = (pageName) => {
        setPage(pageName)
        setSidebarOpen(false)
    }

    return (
        <>
            {
                sidebarOpen && (
                    <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
                )
            }
            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="sidebar__header">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}>❌️</button>
                    <div className="sidebar__links">
                        <button onClick={() => handlePageChange("counter")}>Counter Application</button>
                        <button onClick={() => handlePageChange("random")}>Random Number Generator</button>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default Sidebar