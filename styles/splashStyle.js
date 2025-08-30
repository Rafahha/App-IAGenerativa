import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000C1D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "Reggae One",
        textAlign: "center",
        position: "absolute",
        bottom: "20%",
        fontSize: 50,
        color: "#FFFFFF"
    },
    logoBox: {
        width: "60%",
        height: "60%"
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
});

export default styles;