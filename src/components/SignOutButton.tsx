"use client";
import { signOut } from "next-auth/react";

export default function Home() {
	return (
		<button
			className="bg-primary items-center p-1 my-2 hidden lg:block hover:bg-dark-primary text-off-white justify-center rounded-2xl"
			onClick={() => {
				signOut({
					callbackUrl:
						"/login",
				});
			}}
		>
			{/* <i className="bi bi-box-arrow-right mr-2 mt-3 text-2xl sm:text-base "></i> */}
			Cerrar Sesión
		</button>
	);
}
