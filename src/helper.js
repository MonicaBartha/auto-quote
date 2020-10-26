// return the difference between current year and the selected year
export function getDifferenceOfYear(year) {
    return new Date().getFullYear() - year;
}

// return the total amount by brand
export function totalByBrand(brand) {
    let increase;
    switch(brand) {
        case 'european':
            increase = 1.30;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asian':
            increase = 1.05;
            break;
        default:
            break;
    }
    return increase;
}

// calculate plan type
export function getPlan( plan ) {
    // if plan is basic increment with 1.20, other case increment with 1.5
    return (plan === 'basic') ? 1.20 : 1.50;
}

// show on Capital the first letter 
export function firstLetterToCapital(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}