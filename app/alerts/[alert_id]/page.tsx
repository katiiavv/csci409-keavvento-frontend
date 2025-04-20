interface AlertPageProps {
    params: { alert_id: string };
}

export default function AlertPage({ params: { alert_id } }: AlertPageProps) {
    return <h1>Alert ID: {params.alert_id}</h1>;
}