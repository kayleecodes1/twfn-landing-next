'use client';

export interface JoinRequestData {
    name: string;
    email: string;
    age: number;
    location: string;
    genderIdentity: string;
    leadSource: string;
    socialLink: string;
}

export const submitJoinRequest = async (data: JoinRequestData) => {
    const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (response.status !== 200) {
        throw new Error(await response.json());
    }
    return response.json();
}
