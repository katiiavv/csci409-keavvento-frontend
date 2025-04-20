interface VehiclePageProps {
    params: { vehicle_id: string };
}

export default function VehiclePage({ params: { vehicle_id } }: VehiclePageProps) {
    return <h1>Vehicle ID: {params.vehicle_id}</h1>;
}