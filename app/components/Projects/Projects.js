import { useState } from "react";
import Project from "./Project";

export default function Projects() {
    const projects = [
        {
            title: "Setela",
            description:
                "Una plataforma web de clases online, usando .net web api y react router.",
            links: [
                "https://github.com/xsky13/setela_v3.1",
                "https://github.com/xsky13/setela_client",
            ],
        },
        {
            title: "Diseño inteligente",
            description: "Una página web para venta de lamparas.",
            links: [
                "https://diseno-inteligente.vercel.app",
                "https://github.com/xsky13/diseno-inteligente",
            ],
        },
        {
            title: "TwinGrid",
            description:
                "Una aplicacion web que simula multiples dispositivos IoT y alertas que generan.",
            links: ["https://github.com/xsky13/mvp_software_dispositivos"],
        },
    ];

    return (
        <div
            id="proyectos"
            className="py-20 flex flex-col items-center justify-center"
        >
            <h1 className="font-thin uppercase">Proyectos</h1>
            {projects.map((project, id) => (
                <Project
                    key={id}
                    title={project.title}
                    description={project.description}
                    links={project.links}
                />
            ))}
        </div>
    );
}
