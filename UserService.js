// UserService.js
export class UserService {
    getUser(userId) {
        // API'den kullanıcı verisini al
        // Gerçekte burada HTTP GET isteği yapılacak
        //Burada axios veya fetch kullanılabilir
        return Promise.resolve({ id: userId, name: 'John Doe', email: 'johndoe@example.com' });
    }

    updateUser(userId, name, email) {
        // API'ye kullanıcı verisini güncellemek için istek gönder
        // Gerçekte burada HTTP PUT/PATCH isteği yapılacak
        //Burada axios veya fetch kullanılabilir
        return Promise.resolve({ id: userId, name, email });
    }
}
