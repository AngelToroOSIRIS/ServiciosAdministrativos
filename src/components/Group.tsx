import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Participante } from "@/types/d";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

interface Props {
	participantes: Participante[];
}

const Group = ({ participantes }: Props) => {
	const [selected, setSelected] = useState<Participante[]>([]);
	const classCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";
		const classActiveCard =
		" cursor-pointer flex items-center p-6 text-default-white bg-dark-primary font-medium text-center w-full h-[140px] rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]";

	const guardarParticipante = (participante: any) => {
		const participanteEncontrado = selected.find(
			(item) => item.id === participante.id
		);

		if (participanteEncontrado) {
			return setSelected(
				selected.filter((item) => item.id !== participante.id)
			);
		}

		if (selected.length >= 2) {
			return alert("Solo puede seleccionar máximo 2 participantes");
		}

		setSelected([...selected, participante]);
	};

	const setClass = (idParticipante: number) => {
		const participanteEncontrado = selected.find(
			(item) => item.id === idParticipante
		);

		return participanteEncontrado ? classActiveCard: classCard;
	};

	return (
		<RadioGroup value={selected} onChange={guardarParticipante}>
			<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
			<div className="mx-auto w-[95%] max-w-lg mt-5 lg:max-w-[1125px] grid grid-cols-1 gap-x-[50px] gap-y-5 lg:grid-cols-2">
				{participantes.map((participante) => (
					<RadioGroup.Option
						key={participante.nombre}
						value={participante}
						className={setClass(participante.id)}
					>
						<Image
							className="max-w-[100px] max-h-[100px] rounded-xl"
							src={`/images/participantes/${participante.imagen}`}
							alt={participante.nombre}
							priority={true}
							width={100}
							height={100}
						/>
						<div className="flex flex-col justify-between w-full h-[70px] mb-2">
							<p className="text-center text-5xl">{participante.numPart}</p>
							<p className="text-lg">{participante.nombre}</p>
						</div>

						{!selected.find((item) => item.id === participante.id) && (
							<div className="rounded-full w-[43px] h-[31px] opacity-40 bg-default-white">
								
							</div>
						)}

						{selected.find((item) => item.id === participante.id) && (
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
