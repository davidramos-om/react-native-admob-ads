import { View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from './styles';

export default function PrimaryButton({ label }) {
    return (
        <View
            style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
        >
            <Pressable
                style={[styles.button, { backgroundColor: "#fff" }]}
                onPress={() => alert('You pressed a button.')}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
    );
}
