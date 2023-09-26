import { TouchableOpacity, StyleSheet } from "react-native";

import FarmText from "../text/Text";

export default function Button({buttonMessage, onPress}: any) {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <FarmText style={styles.buttonText}>
                    {buttonMessage}
                </FarmText>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    buttonText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
});