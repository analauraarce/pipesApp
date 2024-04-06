import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'capitals'
}) 
export class CapitalsPipe implements PipeTransform{
    transform(value:string, caps:boolean=true):string {
        return(caps)?value.toUpperCase():value.toLowerCase();
    }
}