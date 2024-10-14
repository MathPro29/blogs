import { Link } from 'react-router-dom';

const Footer = ({ mode }) => {
    return (
        <footer className={`footer mt-20 border-t`}>
            <section>
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
    {["หน้าหลัก", "บอร์ดสนทนา", "สำหรับ Admin"].map((item, index) => {
        // Define routes for each item
        const routes = ["/", "/allblogs", "/adminlogin"];
        return (
            <div className="px-5 py-2" key={item}>
                <Link
                    to={routes[index]}
                    className="text-base leading-6 text-gray-400 hover:underline"
                >
                    {item}
                </Link>
            </div>
        );
    })}
</nav>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2024 Computer Science Maejo University.
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
