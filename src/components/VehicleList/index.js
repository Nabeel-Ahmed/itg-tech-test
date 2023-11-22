import React, { useEffect } from "react";
import useData from "./useData";
import useIsMobile from "./useIsMobile";
import "./style.scss";
import VehicleCard from "../VehicleCard";

//to do lint everything after
export default function VehicleList() {
    // eslint-disable-next-line no-unused-vars
    const [loading, error, vehicles] = useData();
    const isMobile = useIsMobile();

    if (loading) {
        return <div data-testid="loading">Loading</div>;
    }

    if (error) {
        return <div data-testid="error">{error}</div>;
    }

    const carList = vehicles.map((car) => {
        return (
            <>
                <VehicleCard key={car.id} vehicle={car} mobile={isMobile} />
            </>
        );
    });

    return (
        <div data-testid="results">
            <p>List of vehicles will be displayed here</p>
            <p>
                Visit
                <a href="/api/vehicles.json" target="_blank">
                    {" "}
                    /api/vehicles.json
                </a>{" "}
                (main endpoint)
            </p>
            <p>
                Visit
                <a href="/api/vehicle_fpace.json" target="_blank">
                    /api/vehicle_fpace.json
                </a>{" "}
                (detail endpoint - apiUrl)
            </p>
            <p>
                Visit
                <a href="/api/vehicle_xf.json" target="_blank">
                    /api/vehicle_xf.json
                </a>{" "}
            </p>
            (vehicle without any price)
            {loading && <p>loading...</p>}
            {error && <p>error...</p>}
            {vehicles && (
                <>
                    <div className="vehicleList">{carList}</div>
                </>
            )}
        </div>
    );
}
