"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

export default function VoteCorrect() {
	const router = useRouter();
	let [IsOpenInstruc, setIsopenVoteCorrect] = useState(false);

	function closeVoteCorrect() {
		setIsopenVoteCorrect(false);
	}

	function openVoteCorrect() {
		setIsopenVoteCorrect(true);
	}

	return (
		<>
			<button
				type="button"
				onClick={openVoteCorrect}
				className=" mt-[30px] mx-5 max-w-xs h-12 w-[20%] bg-default-white rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-default-white hover:border-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
			>
				Enviar Voto
			</button>
			<Transition appear show={IsOpenInstruc} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeVoteCorrect}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-custom-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-default-white p-6 text-left align-middle border-2 border-default-white shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Voto Registrado con éxito
									</Dialog.Title>
									<div className="mt-5">
										<p className="text-sm text-gray-500">
											Su voto a sido guardado con éxito <br />
											<b>Gracias por votar!</b>
											<br />
										</p>
									</div>
									<button
										type="button"
										className="inline-flex mt-5 justify-center rounded-md border bg-primary text-default-white px-4 py-2 text-sm font-medium "
										onClick={() => router.push("/votaciones?voto=true")}
									>
										Entendido
									</button>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
