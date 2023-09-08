import Header from "@/components/Header";
import Button from "@/components/Button";
import { getServerSession } from "next-auth";
import fetchFn from "@/libs/fetchFn";
import { redirect } from "next/navigation";

export default async function Index() {
	const session = await getServerSession();
	if (session) {
		const email = session.user?.email || "";
		const domain = email.split("@")[1];

		// if (domain === "mail.escuelaing.edu.co") {
		if (domain === "escuelaing.edu.co") {
			const response = await fetchFn(`/personas?email=${email}`);
			if (response.code === 400) return redirect("/logout?error=auth");
		} else {
			return redirect("/logout?error=rol");
		}
	}

	return (
		<main className="main-class">
			<Header />
			<div className="margin-header justify-center text-center">
				<h1 className="m-5 text-3xl text-primary font-bold">
					Servicios y sistemas
				</h1>
			</div>
				<h2 className="text-center text-xl text-primary font-bold">
					Elija un Servicio:
				</h2>
			<div
				className="w-[95%] max-w-[1200px] gap-5 sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col mx-auto mt-[4%] justify-center items-center rounded-xl 
				shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5"
			>
				<Button route="/votaciones" text="Votaciones" />
				<Button route="https://tycho.escuelaing.edu.co/GestionDeCursos/jsp/Inicio.jsp" text="Gestión de cursos" />
				<Button route="/password" text="Gestione su contraseña de correo" />
				<Button route="/documentos" text="Documentos institucionales" />
				<Button route="https://app.powerbi.com/view?r=eyJrIjoiZDllYzQyMzEtM2IzMS00MWYxLWJjYTktMjkzMzEzZDdmMDcyIiwidCI6IjUwNjQwNTg0LTJhNDAtNDIxNi1hODRiLTliM2VlMGYzZjZjZiIsImMiOjR9" text="Boletín estadístico" />
				<Button route="https://siaci-escuelaing.azurewebsites.net/Account/Login" text="Encuesta de Autoevaluación" />
				<button disabled className="hidden lg:block"></button>
				<Button route="https://empleados.escuelaing.edu.co/intraeci/FormUnete" text="Fondo de solidaridad" />
			</div>

		</main>
	);
}
