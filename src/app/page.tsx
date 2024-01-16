import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import fetchFn from "@/libs/fetchFn";
import { redirect } from "next/navigation";
import Image from "next/image";
import OptionCards from "@/components/OptionCards";
import Footer from "@/components/Footer";

export default async function Index() {
	const session = await getServerSession();
	if (session) {
		const email = session.user?.email || "";
		const domain = email.split("@")[1];
		if (domain === "escuelaing.edu.co") {
			const response = await fetchFn(`/personas?email=${email}`);
			if (response.code === 400) return redirect("/logout?error=auth");
		} else {
			return redirect("/logout?error=rol");
		}
	}
	return (
		<>
			<Header />
			<main>
				<div className="mt-20 mx-[500px] justify-center items-center rounded-xl">
					<Image
						className="mx-auto rounded-xl "
						src="/images/inicio/servi.png"
						width={650}
						height={200}
						alt="ImagenRef"
					></Image>
				</div>
				<p className="mt-5 text-center text-3xl mb-10 text-primary font-semibold">
					Selecione un servicio
				</p>
				<div className="mx-auto w-[95%] max-w-[1500px] gap-8 mt-5 mb-10 flex flex-wrap justify-center">
					<OptionCards
						text="Votaciones"
						icon="clipboard-data"
						route="/votaciones"
					/>
					<OptionCards
						text="Gestión de cursos"
						icon="journal-check"
						route="https://tycho.escuelaing.edu.co/GestionDeCursos/jsp/Inicio.jsp"
					/>
					<OptionCards
						text="Gestione su contraseña de correo"
						icon="envelope-check"
						route="/password"
					/>
					<OptionCards
						text="Documentos institucionales"
						icon="file-earmark-text"
						route="/documentos"
					/>
					<OptionCards
						text="Boletín estadístico"
						icon="file-earmark-bar-graph"
						route="https://app.powerbi.com/view?r=eyJrIjoiZDllYzQyMzEtM2IzMS00MWYxLWJjYTktMjkzMzEzZDdmMDcyIiwidCI6IjUwNjQwNTg0LTJhNDAtNDIxNi1hODRiLTliM2VlMGYzZjZjZiIsImMiOjR9"
					/>
					<OptionCards
						text="Encuesta de Autoevaluación"
						icon="clipboard-check"
						route="/https://siaci-escuelaing.azurewebsites.net/Account/Login"
					/>
					<OptionCards
						text="Fondo de solidaridad"
						icon="piggy-bank"
						route="https://empleados.escuelaing.edu.co/intraeci/FormUnete"
					/>
				</div>
			</main>
			<Footer	 />
		</>
	);
}

