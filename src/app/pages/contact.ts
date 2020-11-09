export interface Contact {
  id: number,
  icon: string,
  name: string,
  messages: Message[]
}
export interface Message {
  message: string,
  creationDate: number,
  isMine: boolean
}