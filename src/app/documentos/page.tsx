"use client";

import Header from "@/components/Header";
import Documents from "@/components/pages/Documents";
import { useRouter } from "next/navigation";

export default function Index() {
	const router = useRouter();
	return (
		<main className="margin-header bg-[#dfdfdf] lg:back relative w-full">
			<Header/>
					<div className=" bg-default-white min-w-[250px] mx-auto w-[15%] sm:h-[60px] rounded-lg justify-center items-center text-center text-xl lg:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary font-bold m-6">
						<h2 className=" text-center text-xl text-primary font-bold ">
							Documentos <br /> institucionales
						</h2>
					</div>
					<Documents />
					<div className="justify-center text-center h-[90px]">
					<button
						className="mx-5 mt-[30px] w-[7%] min-w-[70px] max-w-xs h-12 lg:text-base text-center opacity-100 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-default-white my-3 font-semibold text-primary hover:bg-primary hover:text-default-white "
						onClick={() => router.push("/")}
					>
						Volver
					</button>
				</div>
		</main>
	);
}
