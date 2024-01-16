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
import Button from "../Button";

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
		if (selected.length === 0)
			return toast.error("Seleccione las opciones", { id: "5" });

		if (cantidad_votos > 1) {
			if (selected.length < cantidad_votos) {
				const votoBlanco = selected.find(
					(candidato) => candidato.narc === "imblanco"
				);
				if (!votoBlanco) {
					return toast.error(
						"Debe seleccionar 2 opciones \n o un voto en blanco",
						{ id: "6" }
					);
				}
			}
		}

		const response = await fetchFn(
			`/${url_votacion}/votar?email=${
				session && session.user ? session.user.email : ""
			}`,
			{
				method: "POST",
				body: {
					candidatos: selected.map((candidato) => candidato.nroton),
					idcrp:
						url_votacion === "ccl" ? 121 : url_votacion === "copasst" && 120,
					periodo:
						url_votacion === "ccl"
							? "2023-2"
							: url_votacion === "copasst" && "2023-2",
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
		" cursor-pointer flex items-center p-6 text-default-white bg-primary font-medium text-center w-full h-[140px] transition-all rounded-xl strong-shadow";
	const classActiveCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-dark-primary font-medium text-center w-full h-[140px] transition-all rounded-xl strong-shadow";

	return (
		<>
			<Modal
				isOpen={IsOpenModal}
				classContainer="max-w-[500px]"
				setIsOpen={setIsOpenModal}
			>
				{contenModal === "instrucciones" && (
					<p className="py-4 px-2">
						Bienvenido a la <b>{titulo}</b>, recuerde que solo tiene un intento
						de votación, debe escoger{" "}
						<b>
							{cantidad_votos === 1
								? "una opción"
								: `${cantidad_votos} opciones`}{" "}
						</b>{" "}
						máximo o <b>un voto en blanco</b> y darle en el botón{" "}
						<b>Enviar Voto</b>
					</p>
				)}

				{contenModal === "completo" && (
					<p className="py-4 px-2 text-center">
						Su voto a sido guardado con éxito <br />
						<b>Gracias por votar!</b>
						<br />
					</p>
				)}

				<div className="flex-center">
					<button
						type="button"
						className="mt-5 rounded-md border bg-primary text-default-white px-4 py-2 text-sm font-medium"
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

			<div className="flex justify-between gap-14 mx-auto mt-5 w-[30%]">
				<Button text="Enviar Voto" onClick={enviarVoto} />
				<Button disabled={false} text="Volver" route="/votaciones" />
			</div>
		</>
	);
}

