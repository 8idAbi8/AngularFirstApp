/* an interface that created a new data type. 
    This new data type makes it possible for you to specify where HousingLocation data is required. 
T   his new data type also makes your IDE and the TypeScript compiler ensure that HousingLocation data is used where it's required.
*/
export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}
