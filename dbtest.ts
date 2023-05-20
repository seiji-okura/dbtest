import { connect } from "https://deno.land/x/cotton/mod.ts";
import { Model, BaseModel, Column, Primary } from "https://deno.land/x/cotton/mod.ts";

@Model("Users")
export class User extends Model{
    @Primary()
    id!: number;
    @Column()
    firstname!: string;
    @Column()
    lastname!: string;
    @Column()
    email: string;
}

async function main() {
    const db = await connect({
        type: "sqlite",
        database: "./1stdb.sqlite",
        debug: true
    });

    const manager = db.getManager();
    const users = await manager.query(User).where("firstname", "Seiji").all();
    users.forEach((element: User) => {
        console.log(element);
    })
}

const promise = new Promise((resolve: any, reject: any) => {
    main().then(() => {
        resolve("OK");
    }).catch((e) => {
        reject(e);
    });
});
promise.then((msg: string) => {
    console.log("SUCCESSED:", msg);
}, (msg: any) => {
    console.error("FAILED:", msg);
});

