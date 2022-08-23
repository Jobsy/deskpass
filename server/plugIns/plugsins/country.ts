
export const isDeskpassPresent = (country: string) => {
    const countriesWithDskpassPresence: string[] = ["usa", "gb", "nigeria", "all", "peru"];
    return countriesWithDskpassPresence.includes(country);
}