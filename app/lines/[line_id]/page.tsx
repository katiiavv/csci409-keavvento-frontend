interface LinePageProps {
    params: { line_id: string };
}

export default function LinePage({params }: LinePageProps) {
    return <h1>Line ID: {params.line_id}</h1>;
}
