export default function Project(props) {
    return (
        <div className="w-full px-6 py-4 rounded-lg border border-[color:--border] my-6">
            <span className="font-bold">{props.title}</span>
            <p className="text-sm">{props.description}</p>
            <details className="text-sm mt-4 mb-2">
                <summary className="cursor-pointer px-3 py-1.5 rounded-l-none border-l border-borderColor rounded-lg bg-borderColor inline-block transition">
                    Enlaces
                </summary>
                <div className="border-l border-borderColor pl-3 -my-1 pt-2 pb-1.5">
                    {props.links.map((link, id) => (
                        <div
                            key={id}
                            className="my-1 w-fit flex items-center gap-1 link"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>

                            <a href={link}>{link}</a>
                        </div>
                    ))}
                </div>
            </details>
        </div>
    );
}
