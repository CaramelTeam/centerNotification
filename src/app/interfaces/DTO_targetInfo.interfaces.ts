export interface DTOTargetInfo {
  Status?: string;
  Scheme?: string;
  Type?: string;
  Issuer?: string;
  CardTier?: string;
  Country: DTOCountry;
  luhn: boolean;
}

interface DTOCountry {
  A2?: string;
  A3?: string;
  N3?: string;
  Isd?: string;
  Name?: string;
  Cont?: string;
}
