"use client";

import { signOut, useSession } from "next-auth/react";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";
import { useState } from "react";

const Header = () => {
	const router = useRouter();
	const { data, status } = useSession();
	const [collapse, setCollapse] = useState(true);

	const changeCollapse = () => setCollapse(!collapse);
	const user = data?.user ?? {
		name: "default",
		email: "useremail",
	};
	return (
		<header className="fixed top-0 left-0 right-0  w-full h-[65px] text-start shadow-sm bg-gray-box border-b border-borders-light z-40 select-none">
			<nav className="mx-auto flex items-center justify-between container-class gap-4">
				<section className="h-[65px] flex justify-between">
					<Image
						src="/images/ecijg60.png"
						width={105}
						height={60}
						alt="Logo header"
						className="cursor-pointer"
						priority={true}
						onClick={() => router.push("/")}
					/>
				</section>
				<ul className="hidden lg:flex flex-col items-center justify-center font-medium lg:flex-row ">
					<li>
						<button
							className="w-full mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() => router.push("/")}
						>
							Inicio
						</button>
					</li>
					<li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push(
									"https://empleados.escuelaing.edu.co/intraeci/AdminConvoca"
								)
							}
						>
							Aplicantes convocatorias
						</button>
					</li>
					<li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push(
									"https://siaci-escuelaing.azurewebsites.net/Account/Login?ReturnUrl=%2F"
								)
							}
						>
							SIACI
						</button>
					</li>
					<li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push(
									"https://empleados.escuelaing.edu.co/intraeci/InicioPlanes"
								)
							}
						>
							Planes
						</button>
					</li>
					<li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push(
									"https://empleados.escuelaing.edu.co/intraeci/presupuesto"
								)
							}
						>
							Presupuesto
						</button>
					</li>
					<li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push("https://horus.escuelaing.edu.co/planeacion/")
							}
						>
							Proyectos
						</button>
					</li>
					{/* <li>
						<button
							className="w-full py-2 mx-3 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
							onClick={() =>
								router.push("http://copernico.escuelaing.edu.co/software/")
							}
						>
							Descargas
						</button>
					</li> */}
				</ul>
				<Menu />

				{/* Botón de cerrar sesión */}
				<section className="h-[65px] flex justify-start">
					<SignOutButton />
				</section>
			</nav>

			{/* Mostrar nombre del usuario */}
			{/* <div className="justify-end flex mr-[3%] ml-[3%]">
				<p className="hidden lg:block">
					<b>{status === "authenticated" && user.name}</b>
				</p>
			</div> */}
		</header>
	);
};

export default Header;
