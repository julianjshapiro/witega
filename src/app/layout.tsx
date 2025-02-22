import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "../../styles/globals.css";

const vazirmatn = Vazirmatn({
    variable: "--font-vazirmatn",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Witega",
    description: "Learn STEM by STEM.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${vazirmatn.variable} antialiased`}
            >
                <header>
                    <nav className="bg-tertiary px-6 lg:px-8 py-2.5 pt-5 pb-5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="#" className="flex items-center">
                                <img 
                                    src="/mini.svg"
                                    className="mr-3 h-5 sm:h-7"
                                    alt="Witega Logo"
                                />
                            </a>
                            {/* <div className="flex items-center lg:order-2">
                                <a
                                    href="#"
                                    className="hover:bg-background rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-background rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                                >
                                    Settings
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-background rounded-lg text-sm px-4 lg:px-5 py-2 mr-8 lg:py-2.5 mr-2"
                                >
                                    Account
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-background bg-secondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Courses
                                </a>
                            </div>
                            */}
                        </div>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
