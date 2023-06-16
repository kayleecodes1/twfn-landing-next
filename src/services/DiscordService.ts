'use server';

export const sendChannelMessage = async (channelId: string, content: string) => {
    const response = await fetch(`${process.env.DISCORD_API_BASE_URL}/channels/${channelId}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        body: JSON.stringify({ content }),
    });
    if (response.status !== 200) {
        throw new Error(await JSON.stringify(response.json()));
    }
    return response.json();
};
