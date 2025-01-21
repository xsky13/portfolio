'use client';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

export default function Home() {
    const [section, setSection] = useState('home');

    const sections = {
        home: {
            text: 'Arriba',
            id: 'home',
            ref: useRef(null),
        },
        about: {
            text: 'Acerca',
            id: 'about',
            ref: useRef(null),
        },
        projects: {
            text: 'Proyectos',
            id: 'projects',
            ref: useRef(null),
        },
        contact: {
            text: 'Contactar',
            id: 'contact',
            ref: useRef(null),
        },
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSection(entry.target.id);
                }
            });
        }, options);

        Object.values(sections).forEach((item) => {
            if (item.ref.current) {
                observer.observe(item.ref.current);
            }
        });

        return () => {
            Object.values(sections).forEach((item) => {
                if (item.ref.current) {
                    observer.unobserve(item.ref.current);
                }
            });
        };
    }, []);

    return (
        <div>
            <div className="hidden lg:block fixed top-[40%]">
                <ul className="ml-6 text-sm">
                    {Object.values(sections).map((key) => (
                        <li className="list-item" key={key.id}>
                            <a
                                href={`#${key.id}`}
                                className="block"
                                onClick={() => setSection(key.id)}
                            >
                                {key.text}
                            </a>
                            <div className={`link-border ${section === key.id ? 'active' : ''}`}></div>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="home" ref={sections.home.ref} className="h-screen flex flex-col md:flex-row justify-center items-center">
                <img
                    src="/profile.png"
                    className="rounded-full w-5/12 md:w-2/12"
                    alt="profile picture"
                />
                <div className="md:ml-5">
                    <h1 className="uppercase text-6xl text-center md:text-8xl font-thin">
                        Jared <br /> Peter
                    </h1>
                    <span className="font-bold uppercase">Desarrollador web full-stack</span>
                </div>
            </div>
            <div className="block m-auto w-10/12 lg:w-5/12">
                <section id="about" ref={sections.about.ref}>
                    <About />
                </section>
                <section id="projects" ref={sections.projects.ref}>
                    <Projects />
                </section>
                <section id="contact" ref={sections.contact.ref}>
                    <Contact />
                </section>
            </div>
        </div>
    );
}
