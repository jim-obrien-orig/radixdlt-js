import { TSMap } from 'typescript-map'

import RadixMessage from './RadixMessage'

export default interface RadixChat {
    address: string
    chat_id: string
    title: string
    last_message_timestamp: number
    messages: TSMap<string, RadixMessage>
}
