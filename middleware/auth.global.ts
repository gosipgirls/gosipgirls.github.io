
export default defineNuxtRouteMiddleware(async (to) => {
    let user : any = window.localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        if (user.id !== null) {
            if (to.name === 'login' || to.name === 'signup') {
                return navigateTo('/')
            }
        }
    }
});
