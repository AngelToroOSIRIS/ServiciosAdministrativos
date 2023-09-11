import "@/styles/globals.css";
import "@/styles/globals.sass";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import { Toaster } from "react-hot-toast";

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
				<body className={inter.className + "relative"}>
					<Toaster
						position="bottom-right"
						toastOptions={{
							style: {
								userSelect: "none",
				
								maxWidth: "400px",
							},
						}}
					/>
					<Providers>{children}</Providers>
					<footer className="text-default-white bg-primary p-6 text-center z-40 w-full fixed bottom-0 left-0">
						<p>
							Todos los derechos reservados ©2023 - Escuela Colombiana de
							Ingeniería Julio Garavito. Personería Jurídica 086 de enero 19 de
							1973. Renovación de Acreditación Institucional de Alta Calidad.
							Resolución 002710 del 18 de marzo de 2019 (vigencia de 6 años).
							Vigilada por Mineducación.
						</p>
					</footer>
			</body>
		</html>
	);
}

