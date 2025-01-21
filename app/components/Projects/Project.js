export default function Project(props) {
    return (
        <div className="w-full px-6 py-4 rounded-lg border border-[color:--border] my-6">
            <span className="font-bold">{props.title}</span>
            <p className="text-sm">{props.description}</p>
            <details className="text-sm mt-4 mb-2">
                <summary className="cursor-pointer px-3 py-1.5 rounded-l-none border-l border-borderColor rounded-lg bg-borderColor inline-block transition">Enlaces</summary>
                <div className="border-l border-borderColor pl-3 -my-1 pt-2 pb-1.5">
                    {
                        props.links.map((link, id) =>
                            <div
                                key={id} className="my-1">
                                <a
                                    href={link}
                                    className="link"
                                >
                                    {link}
                                </a>

                            </div>
                        )
                    }
                </div>
            </details>
        </div>
    );
}