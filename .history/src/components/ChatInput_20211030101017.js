import  styled  from 'styled-components'
import React from 'react'

export const ChatInput = ({channelName, channelId}) => {
    return (
        <ChatInputContainer>
            <form action=''>
                <input placeholder={`Message #Room`} />
            </form>
        </ChatInputContainer>
    )
}


const ChatInputContainer = styled.div``