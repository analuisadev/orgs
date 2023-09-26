import { Text, StyleSheet } from "react-native"

export default function FarmText({ children, style }: any) {
    let defaultStyle = styles.textStyle;

    if (style?.fontWeight === 'bold') {
        defaultStyle = styles.boldText;
    }

    return <Text style={[style, defaultStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },

    boldText: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})