import { Dimensions, Image, StyleSheet } from "react-native";

import FarmText from '../../../components/text/Text';

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Top({ title }: any) {
    return (
        <>
            <Image source={topo} style={styles.imgTop} />
            <FarmText style={styles.title}>{title}</FarmText>
        </>
    );
}

const styles = StyleSheet.create({
    imgTop: {
        width: "100%",
        height: 578 / 768 * width,
    },

    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});