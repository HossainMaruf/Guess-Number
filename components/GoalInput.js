import { useState } from "react";
import { TextInput, View, Button } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const onChangeHandler = (goal) => {
        setEnteredGoal(goal);
    }
    return (
        <View>
            <TextInput placeholder="Course goal" onChangeText={onChangeHandler} value={enteredGoal} />
            <Button title="Add" onPress={props.addGoal.bind(this, enteredGoal)}></Button>
        </View>
    );
}

export default GoalInput;