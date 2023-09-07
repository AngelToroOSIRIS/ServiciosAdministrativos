"use client";

import Header from "@/components/Header";
import { Participante } from "@/types/d";
import VoteCorrect from "@/components/VoteCorrect";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { useState } from "react";
import Instruc from "@/components/Instruc";
import Group from "@/components/Group";

export default function Home() {
	const participantes: Participante[] = [
		{
			id : 1,
			nombre: "Hugo Tarazona Villamil",
			numPart: "01",
			imagen: "htarazona.gif",
		},
		{
			id : 2,
			nombre: "Luisa Fernanda Morales Becerra",
			numPart: "02",
			imagen: "lmorales.gif",
		},
		{
			id : 3,
			nombre: "Luz mery Valencia Carvajal",
			numPart: "03",
			imagen: "lvalencia.gif",
		},
		{
			id : 4,
			nombre: "Marisol Paez Galindo",
			numPart: "04",
			imagen: "mpaez.gif",
		},
		{
			id : 5,
			nombre: "Nury Del Rosario Forero Hurtado",
			numPart: "05",
			imagen: "nrosario.gif",
		},
		{
			id : 6,
			nombre: "Valeria Castro Hernandez",
			numPart: "06",
			imagen: "vcastro.gif",
		},
		{
			id : 7,
			nombre: "Viviana Catalina Torres Organista",
			numPart: "07",
			imagen: "vtorres.gif",
		},
		{
			id : 8,
			nombre: "Voto en blanco",
			numPart: "08",
			imagen: "vblanco.png",
		},
	];
	const router = useRouter();
	let [IsOpenInstruc, setIsOpenInstruc] = useState<boolean>(true);
	return (
		<main className="container-class h-[100vh]">
			<Modal isOpen={IsOpenInstruc} setIsOpen={setIsOpenInstruc}>
				<div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-default-white p-6 text-left align-middle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all">
					<Instruc />
					
					<div className="mt-4">
						<button
							type="button"
							className="inline-flex justify-center rounded-md border bg-primary text-default-white px-4 py-2 text-sm font-medium "
							onClick={() => setIsOpenInstruc(false)}
						>
							Entendido
						</button>
					</div>
				</div>
			</Modal>
			<Header />
			<div className="margin-header justify-center text-center">
				<h1 className="m-3 text-3xl text-primary font-bold">
					Votación COPASST
				</h1>
				<div className="justify-center my-8 mx-[10%] ">
					<p className="text-lg">Recuerde que solo tiene un intento de votación, debe escoger 2 opciones máximo y darle en el botón <b>Enviar Voto</b></p>
				</div>
			</div>
			{/* <div className=" mx-auto bg-soft-white brightness-90 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg w-[450px] p-1 z-20">
				<Instruc/>
			</div> */}
			<Group participantes={participantes} />
			<div className="flex content-center justify-center mx-auto mt-5 mb-[32%] w-[80%]">
				<VoteCorrect />
				<button
					className="mx-5 mt-[30px] w-[20%] max-w-xs h-12 bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
					onClick={() => router.push("/")}
				>
					Volver
				</button>
			</div>
			
		</main>
		
	);
}

