export class Client {
    private clientId: string;
    private c_name: string;
    private phone: string;
    private c_address: string;

    constructor(clientId: string, c_name: string, phone: string, c_address: string) {
        this.clientId = clientId;
        this.c_name = c_name;
        this.phone = phone;
        this.c_address = c_address;
    }

    public getId() : string
    {
        return this.clientId;
    }

    public getName() : string
    {
        return this.c_name;
    }

    public getPhone() : string
    {
        return this.phone;
    }

    public getAddress() : string
    {
        return this.c_address;
    }
}
