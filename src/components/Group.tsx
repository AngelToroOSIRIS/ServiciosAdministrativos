import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Candidato } from "@/types/d";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

interface Props {
	candidatos: Candidato[];
}

const Group = ({ candidatos }: Props) => {
	const [selected, setSelected] = useState<Candidato[]>([]);
	const classCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";
	const classActiveCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-dark-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";

	const guardarCandidato = (candidatos: any) => {
		const candidatoEncontrado = selected.find(
			(item) => item.id === candidatos.id
		);

		if (candidatoEncontrado) {
			return setSelected(selected.filter((item) => item.id !== candidatos.id));
		}

		if (selected.length >= 2) {
			return alert("Solo puede seleccionar máximo 2 participantes");
		}

		setSelected([...selected, candidatos]);
	};

	const setClass = (idCandidato: number) => {
		const candidatoEncontrado = selected.find(
			(item) => item.id === idCandidato
		);

		return candidatoEncontrado ? classActiveCard : classCard;
	};

	return (
		<RadioGroup value={selected} onChange={guardarCandidato}>
			<div className="mx-auto w-[95%] max-w-lg lg:max-w-[1125px] grid grid-cols-1 gap-x-[50px] gap-y-5 lg:grid-cols-2">
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
	);
};

export default Group;
