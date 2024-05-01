export default function SectionHeader({ subHeader, mainHeader }) {
    return (
        <div>
            <h3 className="uppercase text-gray-600 font-semibold my-4">{subHeader}</h3>
            <h2 className="text-secondary font-bold text-4xl italic leading-4">{mainHeader}</h2>
        </div>
    );
}
