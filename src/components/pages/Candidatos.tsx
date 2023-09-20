"use client";

import fetchFn from "@/libs/fetchFn";
import { Candidato, Validacion } from "@/types/d";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import Instruc from "../Instruc";
import Group from "../Group";
import VoteCorrect from "../VoteCorrect";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { TailSpin } from "react-loader-spinner";
import toast from "react-hot-toast";

export default function Candidatos() {
	const { data: session, status } = useSession();
	const [loading, setloading] = useState(true);
	const [dataCandi, setDataCandi] = useState<Candidato[]>([]);
	const [data, setData] = useState<Validacion[]>([]);
	const router = useRouter();
	let [IsOpenInstruc, setIsOpenInstruc] = useState<boolean>(true);

	const validacionVoto = async () => {
		const response = await fetchFn(
			`/copasst/estado_voto?email=${
				session && session.user ? session.user.email : ""
			}`
		);

		if (response.error || response.code !== 200) return false;

		if (response.data.estado === "1") return false;

		return true;
	};

	const getDataCandi = async () => {
		const usuarioValido = await validacionVoto();

		if (!usuarioValido) {
			toast.error("Ya votó anteriormente", { id: "1" });
			return router.push("/votaciones");
		}

		const response = await fetchFn("/candidatos");
		if (response.error || response.code !== 200) {
			return;
		}
		setDataCandi(response.data);
		setloading(false);
	};

	useEffect(() => {
		if (status === "authenticated") getDataCandi();
	}, [status]);

	return (
		<>
			{loading && (
				<div className="absolute ml-[40%] lg:ml-[47%] mt-[25%] lg:mt-[7%]  justify-center px-auto items-center ">
					<TailSpin
						height="80"
						width="80"
						color="#990000"
						ariaLabel="tail-spin-loading"
						radius="1"
					/>
				</div>
			)}
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
					<div className="mt-[80px] justify-center text-center">
						<h1 className=" text-3xl text-primary font-bold">
							Votación COPASST
						</h1>
						<div className="justify-center m-5 ">
							<p></p>
							<p className="text-lg">
								Bienvenido a la <b>Votación de COPASST</b> , recuerde que solo
								tiene un intento de votación, debe escoger 2 opciones máximo y
								darle en el botón <b>Enviar Votos</b>
							</p>
						</div>
						<Group candidatos={dataCandi} />
					</div>
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
