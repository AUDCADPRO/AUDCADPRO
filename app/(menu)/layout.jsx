import VolverButton from "../components/VolverButton";

export default function MenuLayout({ children }) {
  return (
    <div className="px-4 py-6">
      <VolverButton />
      {children}
    </div>
  );
}
