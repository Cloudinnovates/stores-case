/**
 * @author: Thiago Lima
 * 
 * @description: Generic class which's used to 
 * define its typings. It's being imported in 
 * { StoresService }
 * 
 */

interface StoresSettings <T, Z, Y> {

    _id: String;
    store_name: String;
    store_image: String;
    store_phone: Number;
    store_country: String;
    store_city: String,
    store_type: String,
    store_address: String;
    updated_at: Date
    
}

export class Store implements StoresSettings <String, Number, Date> {

    public _id;
    public store_name;
    public store_image;
    public store_phone;
    public store_country;
    public store_city;
    public store_type;
    public store_address;
    public updated_at;

}