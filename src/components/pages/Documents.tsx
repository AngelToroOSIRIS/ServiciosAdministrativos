"use client";

import React from "react";
import OptionDocument from "../OptionDocument";
import { Accordion, AccordionItem } from "@nextui-org/react";

const infoBotones: { text: string; link: string; otherClass?: string }[] = [
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

const docInfoGestion: { text: string; link: string; otherClass?: string }[] = [
	{
		text: "Anexos informe de gestión 2011",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/estatutos/AnexosInformeGestion2011.pdf",
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
];

const docBoletines: { text: string; link: string; otherClass?: string }[] = [
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
];

const docDesarrollo: { text: string; link: string; otherClass?: string }[] = [
	{
		text: "Plan de desarrollo 2010-2020 Resumido",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/PlandeDesarrollo2010-2020.pdf",
	},
	{
		text: "Plan de desarrollo 2016-2025",
		link: "http://tycho.escuelaing.edu.co/contenido/documentos/2016_2025_Plan_Desarrollo.pdf",
	},
];

const Documents = () => {
	return (
		<>
			<div className="mx-auto mt-5 w-[95%] max-w-[1300px]">
				<Accordion
					itemClasses={{
						content: "gap-8 my-10 flex flex-wrap justify-center",
						title: "font-medium text-xl",
						indicator: "text-xl",
					}}
				>
					<AccordionItem
						key="1"
						aria-label="Informes de gestión"
						title="Informes de gestión"
					>
						{docInfoGestion.map((item, index) => (
							<OptionDocument
								key={index}
								text={item.text}
								icon="filetype-pdf"
								route={item.link}
							/>
						))}
					</AccordionItem>
					<AccordionItem key="2" aria-label="Boletines" title="Boletines">
						{docBoletines.map((item, index) => (
							<OptionDocument
								key={index}
								text={item.text}
								icon="filetype-pdf"
								route={item.link}
							/>
						))}
					</AccordionItem>
					<AccordionItem
						key="3"
						aria-label="Plan de desarrollo"
						title="Plan de desarrollo"
					>
						{docDesarrollo.map((item, index) => (
							<OptionDocument
								key={index}
								text={item.text}
								icon="filetype-pdf"
								route={item.link}
							/>
						))}
					</AccordionItem>
					<AccordionItem key="4" aria-label="Otros" title="Otros">
						{infoBotones.map((item, index) => (
							<OptionDocument
								key={index}
								text={item.text}
								icon="filetype-pdf"
								route={item.link}
							/>
						))}
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
};

export default Documents;

