"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[400px] ">
      <CardHeader>
        <CardTitle>SMART CHAT</CardTitle>
        <CardDescription className="text-sm">
          Chat Bot developed by Luís Gustavo - @dev_atomic_journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] space-y-6 pr-4">
          {messages.map((message) => {
            return (
              <div key={message.id} className="flex gap-3">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>Luís Gustavo</AvatarFallback>
                    <AvatarImage src="https://github.com/ayanokoujifl.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarImage src="https://i.ibb.co/K7jrN31/atomic.png" />
                    <AvatarFallback>DA</AvatarFallback>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="font-bold block text-slate-700">
                    {message.role === "user" ? "Usuário" : "AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
