import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Font from 'expo-font';
import styles from "../styles/homeStyle";
import global from "../styles/global";

import AppButton from "../components/AppButton";

import logo from "../assets/icon_app.png";
import chatbot from "../assets/chat-bot.png";

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
        { id: 1, text: "Estou com um e-commerce. Preciso lançar no mercado e preciso de um pitch para iniciar.", type: "user" },
        { id: 2, text: "Ok! Vamos começar analisando sua ideia.", type: "bot" },
        { id: 3, text: "Vou gerar seu pitch inicial.\n\nPITCH", type: "bot" }
    ]);

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { id: messages.length + 1, text: input, type: "user" }]);
        setInput("");
    };

    const handlePress = () => {}

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
                            {msg.type === "bot" &&
                                <Image source={chatbot} style={[styles.iconTextBot]} />
                            }
                            <View
                                style={[styles.message, msg.type === "user" ? styles.userMessage : styles.botMessage]}
                            >
                                <Text style={[msg.type === "user" ? styles.messageTextUser : styles.messageTextBot]}>{msg.text}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <AppButton
                title="Gerar PDF"
                onPress={handlePress}
                style={ styles.button }
                textStyle={ styles.buttonText }
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
