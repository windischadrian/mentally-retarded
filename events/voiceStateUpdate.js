module.exports = async (client, oldState, newState) => {

    // if nobody left the channel in question, return.
    console.log(oldState.channelID);
    console.log(oldState.guild.me.voice.channelID);
    console.log(newState.channel);
    console.log(oldState.channelID !==  oldState.guild.me.voice.channelID || newState.channel);
    if (oldState.channelID !==  oldState.guild.me.voice.channelID || newState.channel) return;

    // otherwise, check how many people are in the channel now
    console.log(oldState.channel.members.size);
    if (!oldState.channel.members.size - 1) 
    setTimeout(() => { // if 1 (you), wait five minutes
        if (!oldState.channel.members.size - 1) // if there's still 1 member, 
            {
                oldState.channel.leave(); // leave
                console.log('leave');
            }
    }, 100000); // (5 min in ms)

};