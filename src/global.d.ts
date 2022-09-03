namespace NodeJS{
    interface ProcessEnv {
        PORT:number;
        HOSTNAME:string;
    }
}
global.curDir=process.cwd();