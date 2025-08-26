import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

import logo from "../assets/icon_app.png";

export default function HomeScreen({ navigation }) {
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

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.chatContainer}>
                <Text style={styles.title}>Ideia de e-commerce</Text>
                <ScrollView style={styles.messages}>
                    {messages.map((msg) => (
                        <View
                            key={msg.id}
                            style={[styles.message, msg.type === "user" ? styles.userMessage : styles.botMessage]}
                        >
                            <Text style={[msg.type === "user" ? styles.messageTextUser : styles.messageTextBot]}>{msg.text}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Gerar PDF</Text>
            </TouchableOpacity>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000C1D',
        paddingHorizontal: 20,
        paddingTop: 80,
        alignItems: 'center',
    },
    logoBox: {
        position: "absolute",
        top: 20,
        right: 20,
        width: 50,
        height: 50,
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    chatContainer: {
        width: "96%",         
        height: "74%",         
        backgroundColor: "#e6e6e6",
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
    },
    title: {
        color: "#323232",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12
    },
    messages: {
        flex: 1
    },
    message: {
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        maxWidth: "80%"
    },
    userMessage: {
        backgroundColor: "#D1D5D5",
        alignSelf: "flex-end"
    },
    botMessage: {
        backgroundColor: "#0B336C",
        alignSelf: "flex-start"
    },
    messageTextUser: {
        color: "#000102"
    },
    messageTextBot: {
        color: "#e6e6e6"
    },
    button: {
        backgroundColor: "#4DA6FF",
        width: "70%",
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 25,
        alignItems: "center",
        paddingHorizontal: 12,
        width: "90%",
        marginBottom: 10
    },
    input: {
        flex: 1,
        padding: 12,
        color: "#000"
    },
    sendText: {
        color: "#323232",
        fontSize: 16
    }
});
