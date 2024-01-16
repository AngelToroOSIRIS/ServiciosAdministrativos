import Footer from "@/components/Footer";
import VotacionesComponente from "@/components/pages/VotacionesComponente";

export default async function VotacionesPage({
	searchParams,
}: {
	searchParams: { error?: string };
}) {
	return (
		<>
			<main className="margin-header relative ">
				<VotacionesComponente error={searchParams.error ?? undefined} />
			</main>
			<Footer	 />
		</>
	);
}

