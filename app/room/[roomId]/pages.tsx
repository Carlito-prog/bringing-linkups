"use client";

import { useEffect } from "react";

type RoomRedirectPageProps = {
    params: {
        roomId: string;
    };
};

export default function RoomRedirectPage({ params }: RoomRedirectPageProps) {
    const roomUrl = `https://www.bringinglinkups.com/room/${params.roomId}`;

    useEffect(() => {
        window.location.href = roomUrl;
    }, [roomUrl]);

    return (
        <main style={{ padding: 24 }}>
            <h1>Opening BLU...</h1>
            <p>If the app does not open automatically, tap below.</p>
            <a href={roomUrl}>Open room in BLU</a>
        </main>
    );
}