class Mae{
	_nome: string;
	_telefone: string;
    _endereco: string;
    _dataNascimento: Date;
    _babe?: Baby[];

    constructor(nome: string, telefone: string, endereco: string, dataNascimento: Date, bebe: Baby[]) {
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
        this._dataNascimento = dataNascimento;
    }    

}
class Baby{
    _nome: string;
    _dataNascimento: Date;
    _pesoNascimento: number;
    _altura: number;
    _mae: Mae;
    _medico?: Doctor[];

    constructor(nome: string, pesoNascimento: number, dataNascimento: Date, altura: number,mae: Mae, medico: Doctor[]) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._pesoNascimento = pesoNascimento;
        this._altura = altura;
        this._mae = mae;
    }
}
class Doctor{
    _crm: string;
    _nome: string;
    _telefoneCelular: string;
    _especialidade: string;
    _babies?: Baby[];

    constructor(nome: string, crm: string, telefoneCelular: string, especialidade: string,_babies?: Baby[]) {
        this._nome = nome;
        this._crm = crm;
        this._telefoneCelular = telefoneCelular;
        this._especialidade = especialidade;
    }     
}