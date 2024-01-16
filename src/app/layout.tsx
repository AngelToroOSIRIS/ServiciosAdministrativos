import "@/styles/globals.css";
import "@/styles/globals.sass";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Votaciones",
	description: "Plantilla Votaciones 2023",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
				/>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#990000" />
				<meta name="description" content="ECIJG" />
			</head>
			<body className={inter.className + "relative "}>
				<Toaster
					position="bottom-center"
					toastOptions={{
						style: {
							userSelect: "none",

							maxWidth: "400px",
						},
					}}
				/>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

