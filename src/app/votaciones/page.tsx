import VotacionesComponente from "@/components/pages/VotacionesComponente";

export default async function VotacionesPage({searchParams}:{searchParams:{error?:string}}) {
	return (
		<main className="bg-[#dfdfdf] lg:back2 relative w-full h-screen">
			<VotacionesComponente error={searchParams.error??undefined}/>
		</main>
	);
}
