"use client";

import React from "react";

const infoBotones: { text: string; link: string; otherClass?: string }[] = [
	{
		text: "Anexos informe de gestión 2011",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/AnexosInformeGestion2011.pdf",
	},
	{
		text: "Boletín Estadístico 2008-2014",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/BoletinEstadistico2008-2014.pdf",
	},
	{
		text: "Boletín Estadístico 2010-2016",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/Boletin_estadistico_2010_2016.pdf",
	},
	{
		text: "Boletines Consejo Directivo",
		link: "http://tycho.escuelaing.edu.co/estudiantes/ConsultaBoletinProfesor?evsesion=8600348113",
	},
	{
		text: "Informe de gestión 2013",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2013.pdf",
	},
	{
		text: "Informe de gestión 2014",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2014.pdf",
	},
	{
		text: "Informe de gestión 2015",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2015.pdf",
	},
	{
		text: "Informe de gestión 2016",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2016.pdf",
	},
	{
		text: "Informe de gestión 2016 Versión Digital",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2016Digital.pdf",
	},
	{
		text: "Informe de gestión 2017",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2017.pdf",
	},
	{
		text: "Informe de gestión 2018",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2018.pdf",
	},
	{
		text: "Informe de gestión 2022",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/InformeGestion2022.pdf",
	},
	{
		text: "Personería Jurídica de la Escuela",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/PersoneriaJuridicadelaEscuela.pdf",
	},
	{
		otherClass: "text-sm",
		text: "Reglamento de Higiene y Seguridad Industrial de la Escuela",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/ReglamentoHigieneSeguridaddelaEscuela.pdf",
	},
	{
		text: "Reglamento de trabajo",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/Reglamentodetrabajo.pdf",
	},
	{
		text: "Plan de desarrollo 2010-2020 Resumido",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/PlandeDesarrollo2010-2020.pdf",
	},
	{
		text: "Plan de desarrollo 2016-2025",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/2016_2025_Plan_Desarrollo.pdf",
	},
	{
		text: "Politicas Propiedad Intelectual",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/PoliticasPropiedadIntelectualECI.pdf",
	},
	{
		otherClass: "text-sm ",
		text: "Politicas de conservación de pruebas y evaluaciones de estudiantes",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/POLITICACONSERVACIONPRUEBASYEVALUACIONESACADEMICASDEESTUDIANTES.pdf",
	},
	{
		text: "Membrete para comunicaciones institucionales",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/Membrete_Escuela.docx",
	},
];

const Documents = () => {
	return (
		<div className="mt-9 w-[87%] max-w-[1200px] gap-x-20 sm:grid lg:grid-cols-2 sm:grid-cols-1 flex flex-col mx-auto justify-center items-center rounded-xl p-3">
			{infoBotones.map((item) => (
				<a target="_blank"
					className={
						" w-full py-4 lg:text-base text-center opacity-100 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-default-white my-3 font-semibold text-primary hover:bg-primary hover:text-default-white " +
						item.otherClass
					}
					href={item.link}
				>
					{item.text}
				</a>
			))}
		</div>
	);
};

export default Documents;
