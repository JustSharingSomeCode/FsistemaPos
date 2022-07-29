export class Client {
    private client_id: string;
    private c_name: string;
    private phone: string;
    private c_address: string;

    constructor(client_id: string, c_name: string, phone: string, c_address: string) {
        this.client_id = client_id;
        this.c_name = c_name;
        this.phone = phone;
        this.c_address = c_address;
    }

    public getId() : string
    {
        return this.client_id;
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
