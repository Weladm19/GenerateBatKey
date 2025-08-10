import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    appContainer:{
        flex:1,
        backgroundColor:"grey",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    logoContainer:{
        flexDirection: "column",
        borderColor: "#000",
        borderWidth: 1,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        backgroundColor: "#ffff"
    },
    inputContainer:{
        width:"80%",
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 10,
    },
});


export default style;