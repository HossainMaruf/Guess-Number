import { View, Text } from "react-native";


const GoalItem = (props) => {
    return (
        <View>
            <Text>{props.goal}</Text>
        </View>
    );
}

export default GoalItem;