"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Index({ searchParams }: any) {
	const router = useRouter();
	return (
		<>
			<main className="back3 relative w-full h-screen">
				<Header/>
			
				<div className="mt-52 bg-default-white min-w-[250px] mx-auto w-[20%] rounded-lg h-[30px] justify-center items-center text-center text-xl lg:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary font-bold m-6">
					<h1 className="text-xl text-primary font-bold">Gestione su contraseña:</h1>
				</div>
				<div
					className="w-[95%] max-w-[1200px]  gap-5 sm:grid lg:grid-cols-2 sm:grid-cols-2 flex flex-col mx-auto mt-[4%] justify-center items-center rounded-xl 
					 p-5"
				>
					<Button
						route="https://gestorpasswd.escuelaing.edu.co/Manual/escuela/1_ManualUsuario.pdf"
						text="1. Consulte el manual para gestionar el cambio de contraseña"
					/>
					<Button
						route="https://gestorpasswd.escuelaing.edu.co"
						text="2. Cambie su contraseña"
					/>
				</div>
			
				<div className="justify-center text-center h-[90px]">
					<button
						className="mx-5 mt-[30px] w-[7%] min-w-[70px] max-w-xs h-12 font-semibold bg-default-white  rounded-lg  text-primary  hover:text-default-white hover:bg-primary lg:border-none hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
						onClick={() => router.push("/")}
					>
						Volver
					</button>
				</div>
			</main>
		</>
	);
}
