export default (fn) => {
    try {
        return fn();
    } catch (e) {
        return false;
    }
};
