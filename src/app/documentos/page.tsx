"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Documents from "@/components/pages/Documents";
import { useRouter } from "next/navigation";

export default function Index() {
	const router = useRouter();
	return (
		<>
			<main className="margin-header relative w-full">
				<Header />
				<h1 className="text-3xl text-center mt-10 l text-primary font-bold">
					Documentos institucionales
				</h1>
				<Documents />
				<div className="justify-center text-center h-[90px]">
					<button
						className="mx-5 mt-[30px] w-[125px] min-w-[100px] max-w-xs h-12 lg:text-base text-center rounded-xl transition-all normal-shadow bg-default-white font-semibold text-primary hover:bg-primary hover:text-default-white "
						onClick={() => router.push("/")}
					>
						Volver
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
}

