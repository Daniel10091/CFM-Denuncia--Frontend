export class Complaint {

  // Dados pessoais do denunciante
  private name: string;
  private cpf: string;
  private patientKinship: string;
  private age: number;
  private maritalStatus: string;
  private phone: string;
  private phoneCell: string;
  private email: string;

  // Datos pessais do paciente
  private patientName: string;
  private patienteProfession: string;

  // Endereço residencial do denunciante
  private cep: string;
  private address: string;
  private numberOrComplement: string;
  private neighborhood: string;
  private city: string;
  private uf: string;
  private complement: string;
  private incidentOccurredCity: string;
  private incidentOccurredDate: string;
  private incidentOccurredDoctorName: string;
  private complaintDescription: string;
  private complaintEvidence: string;
  private witnessesRelation: string;
  private establishmentName: string;

  constructor(name: string, cpf: string, patientKinship: string, age: number, maritalStatus: string, phone: string, phoneCell: string, email: string, patientName: string, patienteProfession: string, cep: string, address: string, numberOrComplement: string, neighborhood: string, city: string, uf: string, complement: string, incidentOccurredCity: string, incidentOccurredDate: string, incidentOccurredDoctorName: string, complaintDescription: string, complaintEvidence: string, witnessesRelation: string, establishmentName: string) {
    this.name = name;
    this.cpf = cpf;
    this.patientKinship = patientKinship;
    this.age = age;
    this.maritalStatus = maritalStatus;
    this.phone = phone;
    this.phoneCell = phoneCell;
    this.email = email;
    this.patientName = patientName;
    this.patienteProfession = patienteProfession;
    this.cep = cep;
    this.address = address;
    this.numberOrComplement = numberOrComplement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.uf = uf;
    this.complement = complement;
    this.incidentOccurredCity = incidentOccurredCity;
    this.incidentOccurredDate = incidentOccurredDate;
    this.incidentOccurredDoctorName = incidentOccurredDoctorName;
    this.complaintDescription = complaintDescription;
    this.complaintEvidence = complaintEvidence;
    this.witnessesRelation = witnessesRelation;
    this.establishmentName = establishmentName;
  }
  
  // getters and setters
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getPatientKinship(): string {
    return this.patientKinship;
  }
  
  public setPatientKinship(patientKinship: string): void {
    this.patientKinship = patientKinship;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getMaritalStatus(): string {
    return this.maritalStatus;
  }
  
  public setMaritalStatus(maritalStatus: string): void {
    this.maritalStatus = maritalStatus;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public getPhoneCell(): string {
    return this.phoneCell;
  }

  public setPhoneCell(phoneCell: string): void {
    this.phoneCell = phoneCell;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPatientName(): string {
    return this.patientName;
  }

  public setPatientName(patientName: string): void {
    this.patientName = patientName;
  }

  public getPatienteProfession(): string {
    return this.patienteProfession;
  }

  public setPatienteProfession(patienteProfession: string): void {
    this.patienteProfession = patienteProfession;
  }

  public getCep(): string {
    return this.cep;
  }

  public setCep(cep: string): void {
    this.cep = cep;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getNumberOrComplement(): string {
    return this.numberOrComplement;
  }

  public setNumberOrComplement(numberOrComplement: string): void {
    this.numberOrComplement = numberOrComplement;
  }

  public getNeighborhood(): string {
    return this.neighborhood;
  }

  public setNeighborhood(neighborhood: string): void {
    this.neighborhood = neighborhood;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getUf(): string {
    return this.uf;
  }

  public setUf(uf: string): void {
    this.uf = uf;
  }

  public getComplement(): string {
    return this.complement;
  }

  public setComplement(complement: string): void {
    this.complement = complement;
  }

  public getIncidentOccurredCity(): string {
    return this.incidentOccurredCity;
  }

  public setIncidentOccurredCity(incidentOccurredCity: string): void {
    this.incidentOccurredCity = incidentOccurredCity;
  }

  public getIncidentOccurredDate(): string {
    return this.incidentOccurredDate;
  }

  public setIncidentOccurredDate(incidentOccurredDate: string): void {
    this.incidentOccurredDate = incidentOccurredDate;
  }

  public getIncidentOccurredDoctorName(): string {
    return this.incidentOccurredDoctorName;
  }

  public setIncidentOccurredDoctorName(incidentOccurredDoctorName: string): void {
    this.incidentOccurredDoctorName = incidentOccurredDoctorName;
  }

  public getComplaintDescription(): string {
    return this.complaintDescription;
  }

  public setComplaintDescription(complaintDescription: string): void {
    this.complaintDescription = complaintDescription;
  }

  public getComplaintEvidence(): string {
    return this.complaintEvidence;
  }

  public setComplaintEvidence(complaintEvidence: string): void {
    this.complaintEvidence = complaintEvidence;
  }

  public getWitnessesRelation(): string {
    return this.witnessesRelation;
  }

  public setWitnessesRelation(witnessesRelation: string): void {
    this.witnessesRelation = witnessesRelation;
  }

  public getEstablishmentName(): string {
    return this.establishmentName;
  }

  public setEstablishmentName(establishmentName: string): void {
    this.establishmentName = establishmentName;
  }

}
