type Props = {
	label?: string;
};

export default function VerificationStatusBadge({
	label = "Til vurdering — innsendt for verifisering",
}: Props) {
	return (
		<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-amber-300 bg-amber-900/40">
			⏱ {label}
		</span>
	);
}
