import { FlatList, StyleSheet, View } from "react-native";

import Top from "./components/Top";

import Details from "./components/Details";
import Item from "./components/Item";
import FarmText from "../../components/text/Text";

export default function Cest({ top, details, itens }: any) {
    return (
        <>
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={({ listName }) => listName}
                ListHeaderComponent={() => {
                    return <>
                        <Top {...top} />
                        <View style={styles.cest}>
                            <Details {...details} />
                            <FarmText style={styles.title}>
                                {itens.title}
                            </FarmText>
                        </View>
                    </>
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cest: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});