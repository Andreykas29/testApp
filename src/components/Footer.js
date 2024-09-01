export default function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="logo">
                <img src="images/Logo.png" alt="logo"/>
                <h3 className="logo-name">Company Name</h3>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#"><img src="images/df.png" alt="social"/></a>
                <a href="#"><img src="images/linkedin.png" alt="social"/></a>
                <a href="#"><img src="images/Behance Fill.png" alt="social"/></a>
                <a href="#"><img src="images/Instagram.png" alt="social"/></a>
                <a href="#"><img src="images/Facebook.png" alt="social"/></a>
                <a href="#"><img src="images/telegram.png" alt="social"/></a>
            </div>
        </div>
    </footer>
    )
}