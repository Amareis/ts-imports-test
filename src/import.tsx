import {Component} from 'react'
import {model, Model, tProp, types} from 'mobx-keystone'

@model('Chat')
export class Chat extends Model({
    id: tProp(types.string),
}) { }

export class Frame extends Component<{
    chat: Chat
}> {
    render() {
        return this.props.chat.id
    }
}
