// UserView.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { UserViewModel } from './UserViewModel';

const UserView = () => {
    const userId = 1;
    const [viewModel] = useState(new UserViewModel(userId));
    const [user, setUser] = useState(viewModel.user);

    useEffect(() => {
        const unsubscribe = viewModel.onUserChanged(setUser);
        return unsubscribe; // Cleanup function
    }, [viewModel]);

    const handleUpdate = () => {
        viewModel.updateUser(user.name, user.email);
    };

    return (
        <View>
            <Text >User Name: {user.name}</Text>
            <TextInput value={user.name} onChangeText={(newName) => setUser({...user, name: newName})} />
            <Button title="Update User" onPress={handleUpdate} />
        </View>
    );
};

export default UserView;
