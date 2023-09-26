import { Image, StyleSheet, View } from "react-native";

import FarmText from "../../../components/text/Text";
import Button from "../../../components/button/Button";

export default function Details({ cestName, farmName, description, price, farmLogo, button }: any) {
    return (
        <>
            <FarmText style={styles.cestName}>{cestName}</FarmText>
            <View style={styles.farm}>
                <Image source={farmLogo} style={styles.farmImage} />
                <FarmText style={styles.farmName}>{farmName}</FarmText>
            </View>
            <FarmText style={styles.description}>
                {description}
            </FarmText>
            <FarmText style={styles.price}>{price}</FarmText>

            <Button buttonMessage={button} onPress={() => { alert("Pressionado!") }} />
        </>
    )
}

const styles = StyleSheet.create({
    cestName: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },

    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    farmImage: {
        width: 32,
        height: 32,
    },

    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});