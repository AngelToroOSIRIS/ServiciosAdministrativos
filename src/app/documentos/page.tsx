"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Documents from "@/components/pages/Documents";


export default function Index({ searchParams }: any) {
	const router = useRouter();
	return (
		<main>
			<Header />
			<div className="margin-header justify-center text-center">
				<h1 className="m-5 text-3xl text-primary font-bold">Documentos</h1>
			</div>
			<h2 className="text-center text-xl text-primary font-bold m-6">
				Documentos institucionales:
			</h2>
				<Documents/>
				<button
					className="mx-5 mt-[30px] w-[20%] max-w-xs h-12 bg-default-white rounded-lg text-primary border-2"
					onClick={() => router.push("/")}
				>
					Volver
				</button>
		</main>
	);
}
