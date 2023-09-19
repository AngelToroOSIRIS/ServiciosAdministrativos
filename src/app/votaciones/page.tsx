import fetchFn from "@/libs/fetchFn";
import VotacionesComponente from "@/components/pages/VotacionesComponente";

interface Props {
	route: string;
	text: string;
	disabled?: boolean;
	validarVoto: number;
}

const getData = async () => {
	const response = await fetchFn(`/copasst/estado_voto`);
	const validarVoto = getData(); 
	return response.data;
};

export default function Index() {
	return (
		<main className="back2 relative w-full h-screen">
			<VotacionesComponente />
		</main>
	);
}
