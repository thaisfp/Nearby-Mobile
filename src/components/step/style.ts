import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 16
    },
    details:{

    },
    title:{
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
        backgroundColor: "red",
    },
    description: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 4,
    }
})