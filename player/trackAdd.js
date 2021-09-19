module.exports = (client, message, queue, track) => {
    message.channel.send({
    embed: {
        color: '#4a6c98',
        author: { name: client.emotes.music+'playing ' + track.title },
        footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
        fields: [
            { name: 'Channel', value: track.author, inline: true },
            { name: 'Requested by', value: track.requestedBy.username, inline: true },
            { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

            { name: 'Duration', value: track.duration, inline: true },
            { name: 'Filters activated', value: filters.length + '/' + client.filters.length, inline: true },

        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
    },
});
};
