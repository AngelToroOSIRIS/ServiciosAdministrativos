"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Index({ searchParams }: any) {
	const router = useRouter();
	return (
		<main>
			<Header />
			<div className="margin-header justify-center text-center">
				<h1 className="m-5 text-3xl text-primary font-bold">Votaciones</h1>
			</div>
				<h2 className="text-center text-xl text-primary font-bold m-6">
					Elija la votación:
				</h2>
			<div
				className="w-[95%] max-w-[1200px] gap-5 sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col mx-auto mt-[4%] justify-center items-center rounded-xl 
				shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5 mb-20"
			>
				<Button route="/votcopasst" text="Votaciones COPASST" />
				<Button route="/votaciones" text="Votación CCL" />
				<Button route="/votaciones" text="Votaciones Administrativas" />
			</div>

			<div className="margin-header justify-center text-center h-[90px]">
				<button
					className="mx-5 mt-[30px] w-[20%] max-w-xs h-12 bg-default-white rounded-lg text-primary border-2 hover:text-default-white hover:bg-primary"
					onClick={() => router.push("/")}
				>
					Volver
				</button>
			</div>
		</main>
	);
}
