import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "101vh",
            }}
        >
            <div>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
