// Get year difference
export function getDifferenceYear (year) {
    return new Date().getFullYear() - year;
}

// Calculate the total to pay according to the brand
export function calculateBrand(brand) {
    let increase;

    switch(brand) {
        case 'european':
            increase = 1.30;
            break;
        
        case 'american':
            increase= 1.15;
            break;
            
        case 'asian':
            increase = 1.05;
            break;

        default:
            break;
    }

    return increase;
}

// Calculate the type of insurance

export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}
