// UserViewModel.js
import { UserService } from './UserService';

export class UserViewModel {
    constructor(userId) {
        this.userService = new UserService();
        this.user = { id: userId, name: '', email: '' };
        this.listeners = [];
        this.loadUser(userId);
    }

    loadUser(userId) {
        this.userService.getUser(userId).then(userData => {
            this.user = userData;
            this.notifyListeners();
        });
    }

    updateUser(name, email) {
        this.userService.updateUser(this.user.id, name, email).then(updatedUser => {
            this.user = updatedUser;
            this.notifyListeners();
        });
    }

    onUserChanged(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.user));
    }
}
