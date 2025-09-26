import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Font from 'expo-font';
import axios from "axios";
import axios from "axios";
import styles from "../styles/homeStyle";
import global from "../styles/global";
import AppButton from "../components/AppButton";

import logo from "../assets/icon_app.png";
import chatbot from "../assets/chat-bot.png";

const apiKey = ""; // Insira sua chave da API aqui

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Reggae One': require('../assets/fonts/ReggaeOne-Regular.ttf'),
            });
        }
        loadFonts();
    }, []);

    const [messages, setMessages] = useState([
        { id: 1, text: "Olá, estou ansioso para trabalhar com você, mande sua ideia e vamos começar! 🚀", type: "bot" },
    ]);

    const [input, setInput] = useState("");

    const handleSend = async () => {
        const handleSend = async () => {
            if (input.trim() === "") return;

            const newMessage = { id: messages.length + 1, text: input, type: "user" };
            setMessages([...messages, newMessage]);

            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            { role: 'user', content: input },
                        ],
                        max_tokens: 1000,
                        temperature: 0.5,
                    })
                });

                const data = await response.json();

                if (data.choices && data.choices.length > 0) {
                    const botMessage = {
                        id: messages.length + 2,
                        text: data.choices[0].message.content,
                        type: "bot"
                    };

                    setMessages((prevMessages) => [...prevMessages, botMessage]);

                    const pitchData = {
                        prompt: input,
                        pitch: data.choices[0].message.content
                    };

                    await axios.post('http://192.168.1.2:3030/pitch/create', pitchData);

                    setInput("");
                } else {
                    alert("Erro ao obter resposta do modelo.");
                }

            } catch (error) {
                console.error(error);
                alert('Erro ao conectar com o servidor da OpenAI.');
            }
        };

        const handlePressPdf = () => {
            // Implementar função de geração de PDF aqui
        };

        return (
            <View style={[styles.container, global.primary_color]}>
                <Text style={styles.titleApp}>PITCHCRAFT</Text>
                <View style={styles.logoBox}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.chatContainer}>
                    <Text style={styles.title}>Ideia de e-commerce</Text>
                    <ScrollView style={styles.messages}>
                        {messages.map((msg) => (
                            <View key={msg.id}>
                                {msg.type === "bot" && <Image source={chatbot} style={[styles.iconTextBot]} />}
                                <View style={[styles.message, msg.type === "user" ? styles.userMessage : styles.botMessage]}>
                                    <Text style={[msg.type === "user" ? styles.messageTextUser : styles.messageTextBot]}>{msg.text}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <AppButton
                    title="Gerar PDF"
                    onPress={handlePressPdf}
                    style={styles.button}
                    textStyle={styles.buttonText}
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Envie sua mensagem"
                        placeholderTextColor="#888"
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={handleSend}>
                        <Text style={styles.sendText}>➤</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}