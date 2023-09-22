import Header from "@/components/Header";
import Candidatos from "@/components/pages/Candidatos";
import fetchFn from "@/libs/fetchFn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getData = async (email:string) => {
	const response = await fetchFn(`/copasst/estado_voto?email=${email}`);
	if (response.error || response.code !== 200) {
		return redirect("/votaciones?error=server");
	}
	if (response.data.estado === "1") {
		return redirect("/votaciones?error=e_copasst")
	}

	const candidatos = await fetchFn(`/copasst/candidatos`);
	return candidatos.data;
};

export default async function CopasstPage() {
	const session = await getServerSession();
	let candidatos;
	if (session) {
		candidatos = await getData(session && session.user?.email ? session.user.email : "")
	} else {
		return redirect("/votaciones");
	}
	return (
		<main>
			<Header />
			<div className="mt-[80px] justify-center text-center">
				<h1 className=" text-3xl text-primary font-bold">Votación COPASST</h1>
				<div className="justify-center m-5 ">
					<p></p>
					<p className="text-lg">
						Bienvenido a la <b>Votación de COPASST</b>, recuerde que solo tiene
						un intento de votación, debe escoger 2 opciones máximo y darle en el
						botón <b>Enviar Votos</b>
					</p>
				</div>
			</div>
			<Candidatos
				candidatos={candidatos}
				cantidad_votos={2}
				url_votacion="copasst"
				titulo="Votación copasst"
			/>
		</main>
	);
}
