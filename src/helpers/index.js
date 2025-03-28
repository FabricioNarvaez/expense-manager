export const formatAmount = (amount) => {
    return Number(amount).toLocaleString('es-ES', {
        style: 'currency', currency: 'EUR'
    });
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES');
}