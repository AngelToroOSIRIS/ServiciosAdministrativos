import Header from "@/components/Header";
import Candidatos from "@/components/pages/Candidatos";
import fetchFn from "@/libs/fetchFn";


const getData = async () => {
	const response = await fetchFn(
		`/copasst/estado_voto`
	);
		console.log(response.data)
}

export default function Home({ searchParams }: any) {
	
	return (
		<main className="">
			<Header />
			<div className="mt-[90px] justify-center text-center">
				<h1 className=" text-3xl text-primary font-bold">Votación Comité de Convivencia Laboral</h1>
				<div className="justify-center m-8 ">
					<p></p>
					<p className="text-lg">
						Bienvenido a la <b>Votación de Comité de Convivencia Laboral</b> , recuerde que solo tiene
						un intento de votación, debe escoger una opción y darle en el
						botón <b>Enviar Voto</b>
					</p>
				</div>
			</div>
			<Candidatos />
		</main>
	);
}
