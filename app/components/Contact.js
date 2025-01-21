export default function Contact() {
    return (
        <div id="contactar" className="h-screen flex flex-col justify-center items-center">
            <h1 className="font-thin uppercase">Contactar</h1>
            <div className="mt-3 text-sm md:flex">
                <a href="mailto:aljapeter05@gmail.com" className="block my-3 md:my-0 mx-4">aljapeter05@gmail.com</a> <span className="hidden md:block">|</span>
                <a href="https://github.com/xsky13" className="block link my-3 md:my-0 mx-4">https://github.com/xsky13</a> <span className="hidden md:block">|</span>
                <span className="my-3 md:my-0 mx-4">+54 9 343 451 7136</span>
            </div>
        </div>
    );
}