
// checks if query string (country) is found or not
export const isDeskpassPresent = (country: string) => {
    const countriesWithDskpassPresence: string[] = ["usa", "gb", "nigeria", "all", "peru"];
    return countriesWithDskpassPresence.includes(country);
}