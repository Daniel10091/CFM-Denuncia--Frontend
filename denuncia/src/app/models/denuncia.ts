export interface Denuncia {
  name: string;
  cpf: string;
  patientName: string;
  patientKinship: string;
  patienteProfession: string;
  age: string;
  maritalStatus: string;
  phone: string;
  phoneCell: string;
  email: string;
  emailConfirm: string;
  cep: string;
  address: string;
  numberOrComplement: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement: string;
  incidentOccurredCity: string;
  incidentOccurredDate: string;
  incidentOccurredDoctorName: string;
  complaintDescription: string;
  complaintEvidence: string;
  witnessesRelation: string;
  establishmentName: string;
  complaintEvidenceFiles: string;
}

export class Denuncia implements Denuncia {
  constructor(
    public name: string,
    public cpf: string,
    public patientName: string,
    public patientKinship: string,
    public patienteProfession: string,
    public age: string,
    public maritalStatus: string,
    public phone: string,
    public phoneCell: string,
    public email: string,
    public emailConfirm: string,
    public cep: string,
    public address: string,
    public numberOrComplement: string,
    public neighborhood: string,
    public city: string,
    public uf: string,
    public complement: string,
    public incidentOccurredCity: string,
    public incidentOccurredDate: string,
    public incidentOccurredDoctorName: string,
    public complaintDescription: string,
    public complaintEvidence: string,
    public witnessesRelation: string,
    public establishmentName: string,
    public complaintEvidenceFiles: string
  ) {}
}
