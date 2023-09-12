"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function Login({ searchParams }: any) {
	let [IsOpenInstruc, setIsOpenInstruc] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const error = searchParams.error ? searchParams.error : false;
		if (error) {
			if (error === 'auth') {
				toast.error("su cuenta no esta activa, sesión cerrada.", {id: "error1"})
			}
			if (error === 'rol') {
				toast.error("usted esta usando una cuenta de estudiante, sesión cerrada.", {id: "error2"})
			}
			router.push("/login")
		}

	}, []);
	return (
		<>
			{searchParams.error && searchParams.error == 401 && (
				<Modal isOpen={IsOpenInstruc} setIsOpen={setIsOpenInstruc}>
					<div className="bg-default-white rounded-md p-5">
						{" "}
						<p className="text-xl font-bold">Acceso Denegado</p> <br /> Este
						cuenta de correo esta desabilitada o no es administrativa
						<br /> por favor inicia sesión con un correo activo o administrativo
						<br />
						<button
							onClick={() =>
								router.push(
									"https://login.microsoftonline.com/common/oauth2/v2.0/logout"
								)
							}
							className="bg-primary p-1 text-off-white mt-4 justify-center rounded-md"
						>
							Cerrar sesión desde Microsoft
						</button>
						<button
							type="button"
							className="mx-2 bg-primary p-1 text-off-white mt-4 justify-center rounded-md"
							onClick={() => setIsOpenInstruc(false)}
						>
							Cancelar
						</button>
					</div>
				</Modal>
			)}
			<div className="mx-auto p-200 w-[95%] max-w-xs justify-center items-center">
				<p className=" text-3xl text-center my-12 font-semibold">
					Inicio de Sesión
				</p>
					<button
						className="w-[95%] max-w-xs h-12 bg-primary text-off-white py-2 px-4 font-semibold  rounded-xl transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
						onClick={() => signIn("azure-ad", { callbackUrl: "/" })}
					>
						<i className="bi bi-microsoft mr-2"></i> Ingresa con Microsoft
					</button>
					<button 
					className="w-[95%] mt-5 max-w-xs h-12 bg-primary text-off-white py-2 px-4 font-semibold  rounded-xl transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
				onClick={() =>
					router.push(
						"https://login.microsoftonline.com/common/oauth2/v2.0/logout"
					)
				}
				
			>
				Cerrar sesión desde Microsoft
			</button>
			</div>
		</>
	);
}
