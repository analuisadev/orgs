import { Image, StyleSheet, View, FlatList } from "react-native";
import FarmText from "../../../components/text/Text";

export default function Item({ item: { listName, listImage } }: any) {
    return <View key={listName} style={styles.listItens}>
        <Image source={listImage} style={styles.listImageStyle} />
        <FarmText style={styles.listNameStyle}>{listName}</FarmText>
    </View>
}

const styles = StyleSheet.create({
    listItens: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },

    listImageStyle: {
        width: 46,
        height: 46,
    },

    listNameStyle: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
});