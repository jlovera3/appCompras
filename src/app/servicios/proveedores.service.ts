
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProveedoresService {
    proveesURL = 'https://comprasapp-25757.firebaseio.com/proveedores.json';
    proveeURL = 'https://comprasapp-25757.firebaseio.com/proveedores'
    constructor(private http: HttpClient) { }

    postProveedor(proveedor: any) {
        const newpres = JSON.stringify(proveedor);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.proveesURL, newpres, { headers })
            .pipe(
                map(res => {
                    console.log(res || []);
                    return res || [];
                })
            );
    }

    getProveedores() {
        return this.http.get(this.proveesURL)
            .pipe(
                map(res => res || [])
            );
    }

    getProveedor(id$: string) {
        const url = `${this.proveeURL}/${id$}.json`;
        return this.http.get(url)
            .pipe(map(res => res || []));
    }

    putProveedor(presupuesto: any, id$: string) {
        const newpre = JSON.stringify(presupuesto);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const url = `${this.proveeURL}/${id$}.json`;

        return this.http.put(url, newpre, { headers })
            .pipe(map(res => {
                console.log(res || []);
                return res || [];
            })
            );
    }

    delProveedor(id$: string) {
        const url = `${this.proveeURL}/${id$}.json`;
        return this.http.delete(url)
            .pipe(
                map(res => res || [])
            );
    }

}