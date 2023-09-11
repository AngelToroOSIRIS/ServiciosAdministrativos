"use client";

import Header from "@/components/Header";
import Documents from "@/components/pages/Documents";

export default function Index() {
	return (
		<main className="margin-header back relative w-full">
			<Header/>
					<div className=" h-[20px] mx-auto justify-center items-center">
						<h2 className=" text-center text-xl lg:text-default-white text-primary font-bold ">
							Documentos institucionales:
						</h2>
					</div>
					<Documents />
		</main>
	);
}
