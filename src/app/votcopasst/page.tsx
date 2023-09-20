import Header from "@/components/Header";
import Candidatos from "@/components/pages/Candidatos";
import fetchFn from "@/libs/fetchFn";

const getData = async () => {
	const responsevoto = await fetchFn(`/copasst/estado_voto`);
	console.log(responsevoto.data);
};

export default function Home({ searchParams }: any) {
	return (
		<main className="">
			<Header />

			<Candidatos />
		</main>
	);
}
