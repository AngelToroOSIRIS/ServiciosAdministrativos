"use client";

import fetchFn from "@/libs/fetchFn";
import { Candidato } from "@/types/d";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import Instruc from "../Instruc";
import Group from "../Group";
import VoteCorrect from "../VoteCorrect";
import { useRouter } from "next/navigation";

export default function Candidatos() {
	const [loading, setloading] = useState(true);
	const [dataCandi, setDataCandi] = useState<Candidato[]>([]);
	const router = useRouter();
	let [IsOpenInstruc, setIsOpenInstruc] = useState<boolean>(true);
	const getDataCandi = async () => {
		const response = await fetchFn("/candidatos");
		if (response.error || response.code !== 200) {
			return;
		}
		setDataCandi(response.data);
		console.log(response.data);
		setloading(false);
	};

	useEffect(() => {
		getDataCandi();
	}, []);
	return (
		<>
			{!loading && (
				<>
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
					<Group candidatos={dataCandi} />
					<div className="flex content-center justify-center mx-auto mt-5 w-[80%]">
						<VoteCorrect />
						<button
							className=" mt-[30px] mx-5 max-w-xs w-[25%] h-12 lg:w-[23%] bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() => router.push("/votaciones")}
						>
							Volver
						</button>
					</div>
				</>
			)}
		</>
	);
}
