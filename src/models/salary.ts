export type NetForYear = {
    net: number;
    year: string;
};

export type GrossForYear = {
    gross: number;
    year: string;
};

export type YearlySalary = {
    gross: NetForYear[][]; // the index of the array is the gross amount
    net: GrossForYear[][]; // the index of the array is the net amount ( could've as well done it like that -> net:{[key: number]:GrossForYear[]})
};

export type ChartNetSalaryPoint = {
    year: string;
    salary: number;
};
