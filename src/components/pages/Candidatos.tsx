"use client";

import fetchFn from "@/libs/fetchFn";
import { Candidato } from "@/types/d";
import { useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

interface Props {
	candidatos: Candidato[];
	cantidad_votos: number;
	titulo: string;
	url_votacion: string;
}

interface Props {
	candidatos: Candidato[];
}

export default function Candidatos({
	candidatos,
	cantidad_votos = 1,
	titulo,
	url_votacion,
}: Props) {
	const { data: session } = useSession();
	const router = useRouter();
	const [selected, setSelected] = useState<Candidato[]>([]);
	const [IsOpenModal, setIsOpenModal] = useState<boolean>(true);
	const [contenModal, setContenModal] = useState<"instrucciones" | "completo">(
		"instrucciones"
	);

	const guardarCandidato = (candidatos: any) => {
		const candidatoEncontrado = selected.find(
			(item) => item.id === candidatos.id
		);

		if (candidatoEncontrado) {
			return setSelected(selected.filter((item) => item.id !== candidatos.id));
		}

		if (selected.length >= cantidad_votos) {
			return toast.error(
				cantidad_votos === 1
					? "Solo puede seleccionar máximo  un candidato"
					: `Solo puede seleccionar máximo  ${cantidad_votos} candidatos`,
				{ id: "1" }
			);
		}
		
		
		setSelected([...selected, candidatos]);
	};

	const enviarVoto = async () => {
		const response = await fetchFn(
				`/${url_votacion}/votar?email=${
					session && session.user ? session.user.email : ""
				}`,
				{
					method: "POST",
					body: {
						candidatos: selected.map((candidato)=>candidato.nroton),
						idcrp:
							url_votacion === "ccl" ? 121 : url_votacion === "copasst" && 120,
						periodo:
							url_votacion === "ccl" ? "2023-2" : url_votacion === "copasst" && "2023-2",
					},
				}
				);
				
		if (response.error || response.code !== 200) {
			return toast.error("No se pudó registrar el voto", {
				position: "bottom-center",
				id: "4",
			});
		}

		setContenModal("completo");
		setIsOpenModal(true);
	};
	
	const setClass = (idCandidato: number) => {
		const candidatoEncontrado = selected.find(
			(item) => item.id === idCandidato
			);
			
			return candidatoEncontrado ? classActiveCard : classCard;
		};

	const classCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";
	const classActiveCard =
	" cursor-pointer flex items-center p-6 text-default-white bg-dark-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";
	
	return (
		<>
			<Modal isOpen={IsOpenModal} setIsOpen={setIsOpenModal}>
				<div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-default-white p-6 text-left align-middle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all">
					{contenModal === "instrucciones" && (
						<p>
							Bienvenido a la <b>{titulo}</b>, recuerde que solo tiene un
							intento de votación, debe escoger{" "}
							<b>
								{cantidad_votos === 1
									? "una opción"
									: `${cantidad_votos} opciones`}{" "}
								máximo
							</b>{" "}
							y darle en el botón <b>Enviar Voto</b>
						</p>
					)}

					{contenModal === "completo" && (
						<p>
							Su voto a sido guardado con éxito <br />
							<b>Gracias por votar!</b>
							<br />
						</p>
					)}

					<button
						type="button"
						className="mt-4 justify-center rounded-md border bg-primary text-default-white px-4 py-2 text-sm font-medium"
						onClick={() => {
							if (contenModal === "instrucciones") setIsOpenModal(false);
							if (contenModal === "completo") router.push("/votaciones");
						}}
					>
						Entendido
					</button>
				</div>
			</Modal>

			<RadioGroup value={selected} onChange={guardarCandidato}>
				<div className="mx-auto w-[95%] max-w-lg lg:max-w-[1125px] grid grid-cols-1 gap-x-[50px] gap-y-5 lg:grid-cols-2 select-none">
					{candidatos.map((candidato) => (
						<RadioGroup.Option
							key={candidato.nombre}
							value={candidato}
							className={setClass(candidato.id)}
						>
							<Image
								className="max-w-[100px] max-h-[100px] rounded-xl"
								src={`/images/candidatos/${candidato.narc}.gif`}
								alt={`imagen de candidato ${candidato.nroton}`}
								priority={true}
								width={100}
								height={100}
							/>
							<div className="flex flex-col justify-between w-full h-[70px] mb-2">
								<p className="text-center text-5xl">{candidato.nroton}</p>
								<p className="text-lg">{candidato.nombre}</p>
							</div>

							{!selected.find((item) => item.id === candidato.id) && (
								<div className="rounded-full w-[43px] h-[31px] opacity-40 bg-default-white"></div>
							)}

							{selected.find((item) => item.id === candidato.id) && (
								<div className="rounded-full p-1  text-dark-primary bg-default-white">
									<CheckIcon className=" rounded-full h-6 w-6 " />
								</div>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>

			<div className="flex content-center mb-32 justify-center mx-auto mt-5 w-[80%]">
				<button
					className=" mt-[30px] mx-5 max-w-xs w-[25%] h-12 lg:w-[23%] bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
					onClick={enviarVoto}
				>
					Enviar voto
				</button>
				<button
					className=" mt-[30px] mx-5 max-w-xs w-[25%] mb-[15%] lg:mb-[2%] h-12 lg:w-[23%] bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
					onClick={() => router.push("/votaciones")}
				>
					Volver
				</button>
			</div>
		</>
	);
}
