import Header from "@/components/Header";
import Candidatos from "@/components/pages/Candidatos";
import fetchFn from "@/libs/fetchFn";
import { redirect } from "next/navigation";

const getData = async () => {
	const response = await fetchFn("/copasst/candidatos");

	if (response.error || response.code !== 200) {
		return redirect("/votaciones");
	}

	return response.data;
};

export default async function CopasstPage() {
	const candidatos = await getData();

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
