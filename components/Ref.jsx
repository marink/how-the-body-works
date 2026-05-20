export default function Ref({ n }) {
    return (
        <sup>
            <a
                href={`#ref-${n}`}
                style={{ textDecoration: 'none', color: '#1565C0', fontWeight: 600 }}
            >
                [{n}]
            </a>
        </sup>
    );
}
