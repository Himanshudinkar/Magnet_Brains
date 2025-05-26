
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <h3>Watch E-Commerce</h3>
                <p>Your one-stop destination for premium watches.</p>
                <p className="footer-link">www.watchecommerce.com</p>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Watch E-Commerce. All Rights Reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer