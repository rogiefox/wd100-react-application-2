const NavigationBar = (props) => {
    return (
        <>
            <nav className="bg-warning container-fluid p-2">
                <h1>My Website List</h1>
            </nav>
            <img src={props.img} className="w-100" alt="" srcset="" />
        </>
    )
}

export default NavigationBar;