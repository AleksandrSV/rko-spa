export interface Client {
    id: bigint;
    globalCompanyId?: bigint|null;
    plCompanyId?: bigint|null;
    inn: string;
    kpp?: string;
    ogrn: string;
    fullName: string;
    shortName: string;
}