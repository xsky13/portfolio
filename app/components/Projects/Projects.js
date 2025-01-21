import { useState } from "react";
import Project from "./Project";

export default function Projects() {
    const projects = [
        {
            title: 'Setela',
            description: 'Una plataforma web de clases online, usando NuxtJS y Supabase',
            links: [
                'https://setela.vercel.app',
                'https://github.com/xsky13/teatral-admin'
            ]
        },
        {
            title: 'Teatral',
            description: 'Una aplicacion web de manejo de teatro, usando Laravel como backend y SolidJS de frontend',
            links: [
                'https://github.com/xsky13/teatral-admin',
                'https://github.com/xsky13/teatral-api',
            ]
        },
        {
            title: 'Diseño inteligente',
            description: 'Una página web para venta de lamparas',
            links: [
                'https://diseno-inteligente.vercel.app',
                'https://github.com/xsky13/diseno-inteligente'
            ]
        },
        {
            title: 'Blogposts',
            description: 'Una simple aplicacion web CRUD con autenticación',
            links: [
                'https://github.com/xsky13/blogposts-backend',
                'https://github.com/xsky13/blogposts-frontend',
            ]
        }
    ];

    return (
        <div id="proyectos" className="py-20 flex flex-col items-center justify-center">
            <h1 className="font-thin uppercase">Proyectos</h1>
            {
                projects.map((project, id) => 
                    <Project
                        key={id}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                    />
                )
            }
        </div>
    );
}