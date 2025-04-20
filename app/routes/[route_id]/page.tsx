interface RoutePageProps {
    params: { route_id: string };
}

export default function RoutePage({ params}: RoutePageProps) {
    return <h1>Route ID: {params.route_id}</h1>;
}