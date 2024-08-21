export interface DTOTargetInfo {
  status?: string;
  scheme?: string;
  type?: string;
  issuer?: string;
  cardTier?: string;
  Country: DTOCountry;
  luhn: boolean;
}

interface DTOCountry {
  a2?: string;
  a3?: string;
  n3?: string;
  isd?: string;
  Name?: string;
  cont?: string;
}
