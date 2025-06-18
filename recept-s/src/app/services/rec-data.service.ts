import { Injectable } from "@angular/core";
import { SmallRec } from '../classes/SmallRec';

@Injectable({providedIn: 'root' })
export class RecDataService{
    recss: SmallRec[] = []
    arecss: SmallRec[] = []
    drecss: SmallRec[] = []
}