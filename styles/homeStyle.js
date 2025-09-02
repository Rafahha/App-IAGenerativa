import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80,
        alignItems: 'center',
    },
    titleApp: {
        fontFamily: "Reggae One",
        textAlign: "center",
        top: "2%",
        position: "absolute",
        fontSize: 30,
        color: "#FFFFFF"
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
    iconTextBot: {
        width: 60,
        height: 60,
        alignSelf: "flex-start"
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

export default styles;  