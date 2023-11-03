

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";



export const metadata = {
    title: 'Car Hub',
    description: 'Discover car showcase application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className='relative'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
