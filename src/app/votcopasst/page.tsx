"use client";

import Header from "@/components/Header";
import { Candidato} from "@/types/d";
import VoteCorrect from "@/components/VoteCorrect";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { useState } from "react";
import Instruc from "@/components/Instruc";
import Group from "@/components/Group";
import fetchFn from "@/libs/fetchFn";
import { useEffect } from "react";

export default function Home({ searchParams }: any) {
	const [loading, setloading] = useState(true)
	const [dataCandi, setDataCandi] = useState<Candidato[]>([])
	const getDataCandi =async () => {
		const response = await fetchFn('/candidatos')
		if (response.error || response.code !== 200) {
			return
		}
		setDataCandi(response.data)
		console.log(response.data)
		setloading(false)
	}

	useEffect(() => {
		getDataCandi()
	  }, [])

	const router = useRouter();
	let [IsOpenInstruc, setIsOpenInstruc] = useState<boolean>(true);
	return (
		<main className="container-class h-[100vh]">
			{!loading &&<>
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
				<div className="mt-[90px] justify-center text-center">
					<h1 className=" text-3xl text-primary font-bold">
						Votación COPASST
					</h1>
					<div className="justify-center m-8 ">
						<p className="text-lg">Bienvenido a la <b>Votación de COPASST</b> , recuerde que solo tiene un intento de votación, debe escoger 2 opciones máximo y darle en el botón <b>Enviar Votos</b></p>
					</div>
				</div>
				<Group candidatos={dataCandi} />
				<div className="flex content-center justify-center mx-auto mt-5 w-[80%]">
					<VoteCorrect />
					<button
						className=" mt-[30px] mx-5 max-w-xs h-12 w-[23%] bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
						onClick={() => router.push("/votaciones")}
					>
						Volver
					</button>
				</div>
			</>}
			
		</main>
		
	);
}

